import React from "react";

import "./styles.css";
import Header from "./header/Header";
import Channels from "./channels/Channels";
import Messages from "./messages/Messages";
import People from "./people/People"; // for   <People/>

export default function HomePage() {
  console.log("in Homepage")
  return (
    <div className="home">
      <Header />
      <Channels />
      <Messages />
      <People />
    </div>
  );
}
