import "./styles.css";
import useFetch from "../../../my-hook/useFetch";
import { localhostUrl } from "../../../config";
import { curData } from "../../../data";
import { jwt } from "../../../config";

import React from "react";
import { useState } from "react";

export default function Channels({handleSwitchCh}) {
  const url = `${localhostUrl}/channels`;

  const [channelName, setChannelName] = useState("");
  const { data, error, loading } = useFetch(url);
  console.log(data);

  if (loading) return <p> Loading</p>;
  if (error) return <p> Oops, there is something wrong :(</p>;

  /* get user input */
  // const title = document.getElementById("channel-input").value;

  // define handler fn
  // const handleInput = () => {

  // }

  /* define handler fn */




  const handleChannel = () => {
    // const title = channelName;
    // const initiator = curData.curUser;
    // async function addChannel(title, initiator) {
    //   const body = {
    //     data: {
    //       title: title,
    //       initiator: initiator,
    //     },
    //   };

    //   const response = await fetch(url, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(body),
    //   });
    //   console.log("run handleChannel");
    //   return response.json();
    // }
    // addChannel(title, initiator);
  };
  return (
    <div className="channel-col">
      <div className="channels">
        {data.data.map((channel, index) => (
          <div key={index} className="channel">
            <p className="single-channel" id={channel.id} onClick={handleSwitchCh}>
              {channel.attributes.title}
            </p>
          </div>
        ))}
      </div>
      <div className="create-new-channel">
        <form className="channel-form">
          <input
            type="text"
            className="channel-input"
            value={channelName}
            onChange={(e) => setChannelName(e.target.value)}
            placeholder="New Channel Name"
            required
          />
          <button
            className="add-channel"
            id="add-channel"
            onClick={handleChannel}
          >
            +
          </button>
        </form>
      </div>
    </div>
  );
}

/* ref: */
/* 
React Input Element : Value vs Default Value
<input type="text" value={this.state.inputVal} onChange={(e) => {this.setState({inputVal: e.target.value})}} />
https://stackoverflow.com/questions/42807901/react-input-element-value-vs-default-value

*/

/* 
 "data":{
    "users_permissions_users": {
        "id": 8
    },
    "initiator": "testAli2",
    "title": "# Ali's channel-1"

    }

*/
