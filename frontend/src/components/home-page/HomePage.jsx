import React from "react";
import { useState, useEffect } from "react";

import "./styles.css";
import Header from "./header/Header";
import Channels from "./channels/Channels";
import Messages from "./messages/Messages";
import People from "./people/People"; // for   <People/>
import { curData } from "../../data";
import { localhostUrl } from "../../config";

/* way 2: use global var curData.curCh, works */
export default function HomePage() {
  /* can't comment url, setUrl, message col will freeze. why? useFetch dependence [url]? */
  const [url, setUrl] = useState('');

  console.log("in Homepage");
  return (
    <div className="home">
      <Header />
      <Channels
        handleSwitchCh={(e) => {
          // console.log("you clicked me!");
          curData.curCh=e.target.id;
          console.log("e.target.id:", e.target.id);
          setUrl(`${localhostUrl}/channels/${e.target.id}?populate=messages`);
         document.querySelectorAll(".check-ch").forEach(e => e.checked=false);
          e.target.parentElement.children[0].checked=true;       
        }}
      />
      <Messages />
      <People />
    </div>
  );
}


/* way 1, pass url or curChUrl to Message, not work, "unexpected token < at position 0" */
// export default function HomePage() {
//   // const [url, setUrl] = useState(
//   //   `${localhostUrl}/channels/1?populate=messages`
//   // );
//   const [url, setUrl] = useState('');
//   let  curChUrl;

//   console.log("in Homepage");
//   return (
//     <div className="home">
//       <Header />
//       <Channels
//         handleSwitchCh={(e) => {
//           console.log("you clicked me!");
//           curData.curCh=e.target.id;
//           setUrl(`${localhostUrl}/channels/${e.target.id}?populate=messages`);
//         curChUrl=`${localhostUrl}/channels/${e.target.id}?populate=messages`;
//           console.log("clicked url:", url);
//           console.log("clicked curChUrl:", curChUrl);
//         }}
//       />
//       <Messages url={url} />
//       <People />
//     </div>
//   );
// }
