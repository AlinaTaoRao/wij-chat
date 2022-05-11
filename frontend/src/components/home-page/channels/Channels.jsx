import "./styles.css";
import useFetch from "../../../my-hook/useFetch";
import { localhostUrl } from "../../../config";

import React from "react";

export default function Channels() {
  const { data, error, loading } = useFetch(`${localhostUrl}/channels`);
  console.log(data);

  if (loading) return <p> Loading</p>;
  if (error) return <p> Oops, there is something wrong :(</p>;

  return (
    <div className="channel-col">
      <div className="channels">
        {data.data.map((channel, index) => (
          <div key={index} className="channel">
            <p className="single-channel" data-channel-id={channel.id}>{channel.attributes.title}</p>
          </div>
        ))}
      </div>
      <div className="create-new-channel">
        <form className="channel-form">
          <input
            type="text"
            className="channel-input"
            placeholder="New Channel Name"
            required
          />
          <button className="add-channel" id="add-channel">+</button>
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
