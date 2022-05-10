import "./styles.css";
import useFetch from "../../../logic/useFetch";
import { localhostUrl } from "../../../config";

import React from "react";

export default function Channels() {
  const { data, error, loading } = useFetch(`${localhostUrl}/channels`);
  console.log(data);

  if (loading) return <p> Loading</p>;
  if (error) return <p> Oops, there is something wrong :(</p>;

  return (
    <div className="channels">
      {data.data.map((channel, index) => (
        <div key={index} className="channel">
          <h3>{channel.attributes.title}</h3>
        </div>
      ))}
    </div>
  );
}
