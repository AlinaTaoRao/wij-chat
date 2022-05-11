import "./styles.css";
import useFetch from "../../../my-hook/useFetch";
import { localhostUrl } from "../../../config";

import React from "react";

export default function Messages() {
  const { data, error, loading } = useFetch(`${localhostUrl}/messages`);
  console.log("Messages:", data);

  if (loading) return <p> Loading</p>;
  if (error) return <p> Oops, there is something wrong :(</p>;
  return (
    <div className="messages-col">
      <div className="messages">
        {data.data.map((message, index) => (
          <div key={index} className="message">
            <p className="single-msg" data-msg-id={message.id}>{message.attributes.body}</p>
          </div>
        ))}
      </div>
      <div className="create-message">
        <input type="text" className="input-message" placeholder="New message" required/>
        <button className="send-msg" id="send-msg">Send</button>
      </div>
    </div>
  );
}
