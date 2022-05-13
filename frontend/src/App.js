import "./App.css";
import SignIn from "./components/sign-in/SignIn";
import SignUp from "./components/sign-up/SignUp";
import HomePage from "./components/home-page/HomePage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { curData } from "./data";

function App() {
  const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [userId, setUserId] = useState("");
  /* define handlers */
  const activeUser = () => {
    // const checkUserEls = document.querySelectorAll(".check-user"); //try 1: use querySelectorAll()
    const checkUserEls = document.getElementsByClassName("check-user"); // try 2: use getElementsByClassName()
    const isArray = Array.isArray(checkUserEls); 
    console.log("checkUserEls===", checkUserEls);
    console.log("isArray===", isArray); //false
    console.log("checkUserEls type is: ", Object.prototype.toString.call(checkUserEls));
    // [].forEach.call(checkUserEls, (e) => (e.checked = true));
    // HTMLCollection.prototype.forEach = Array.prototype.forEach;
    // NodeList.prototype.forEach = Array.prototype.forEach;
    // [...checkUserEls].forEach((e) => (e.checked = true));
    // checkUserEls.forEach(e => e.checked = true);
    // for (let item of checkUserEls) {
    //   item.checked = true;
    // }
    // checkUserEls.item(0).checked = true;
    console.log("checkUserEls===", checkUserEls);
    // document.querySelectorAll(`[data-username=${curData.curUser}]`).checked=true;
    console.log("curData.curUser===", curData.curUser);
    // checkUserEls.forEach((e) =>
    //   e.dataset.usn === curData.curUser
    //     ? (e.checked = true)
    //     : (e.checked = false)
    // );
  };
  /* document.querySelectorAll("[data-foo='1']")
 sizeChoice = sizeEl.dataset.size;
 */
/* 
var list= document.getElementsByClassName("events");
[].forEach.call(list, function(el) {
    console.log(el.id);
});
*/
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/signIn"
            element={
              <SignIn
                username={username}
                handleUsernameInput={(e) => {
                  curData.curUser = e.target.value;
                  console.log("cur user?:", curData.curUser);
                  setUsername(e.target.value);
                }}
                handleSignIn={activeUser}
              />
            }
          />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
