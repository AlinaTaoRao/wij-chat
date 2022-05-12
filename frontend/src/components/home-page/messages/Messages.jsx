import "./styles.css";
import useFetch from "../../../my-hook/useFetch";
// import useFetch2 from "../../../my-hook/useFetch2"; //for test
import { localhostUrl } from "../../../config";
import { curData } from "../../../data";

import React from "react";
import { useState, useEffect } from "react";

/* way 2: get and render messages in a channel, works*/
export default function Messages() {
  /* /api/channels/1?populate=messages */

  const url = curData.curCh
    ? `${localhostUrl}/channels/${curData.curCh}?populate=messages`
    : `${localhostUrl}/channels/1?populate=messages`;

  const { data, error, loading } = useFetch(url);
    console.log("Messages i want:", data);
  /* for empty channel, this console will throw error */
  // console.log("Messages i want:", data);
  // if (data !== null) {
  //   console.log(
  //     "break data[]:",
  //     data.data.attributes.messages.data[0].attributes.body
  //   );
  // }

  if (loading) return <p> Loading</p>;
  if (error) return <p> Oops, there is something wrong :(, {error.message}</p>;

  return data.data.attributes.messages.data.length!==0 ?  (
    <div className="messages-col">
      <div className="messages">
        {data.data.attributes.messages.data.map((msg, index) => (
          <div key={index} className="message">
            <p className="sender">{msg.attributes.sender}</p>
            <p>{msg.attributes.publishedAt}</p>
            <p className="single-msg" data-msg-id={msg.id}>
              {msg.attributes.body}
            </p>
          </div>
        ))}
      </div>

      <div className="create-message">
        <input
          type="text"
          className="input-message"
          placeholder="New message"
          required
        />
        <button className="send-msg" id="send-msg">
          Send
        </button>
      </div>
    </div>
  ) : (<div className="messages-col">this channel don't have any message yet.</div>) 
}

/* way 1: get and render all messages, works*/
// export default function Messages() {
//   const { data, error, loading } = useFetch(`${localhostUrl}/messages`);
//   console.log(" All Messages:", data);

//   if (loading) return <p> Loading</p>;
//   if (error) return <p> Oops, there is something wrong :(</p>;

//   return (
//     <div className="messages-col">
//       <div className="messages">
//         {data.data.map((message, index) => (
//           <div key={index} className="message">
//             <p className="sender">{message.attributes.sender}</p>
//             <p className="single-msg" data-msg-id={message.id}>
//               {message.attributes.body}
//             </p>
//           </div>
//         ))}
//       </div>
//       <div className="create-message">
//         <input
//           type="text"
//           className="input-message"
//           placeholder="New message"
//           required
//         />
//         <button className="send-msg" id="send-msg">
//           Send
//         </button>
//       </div>
//     </div>
//   );
// }
