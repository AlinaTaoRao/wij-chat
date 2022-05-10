import React from "react";

import "./styles.css";
import Channels from "./channels/Channels";
import Messages from "./messages/Messages";
import People from "./people/People"; // for   <People/>

export default function HomePage() {
  return (
    <div className="home">
      <h1 className="title">Wij Chat Home Page</h1>
      <Channels />
      <Messages />
      <People/>
    </div>
  );
}
