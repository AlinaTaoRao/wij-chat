import "./App.css";
import Login from "./components/login/Login";
import Channels from "./components/channels/Channels";
import Messages from "./components/messages/Messages";
import People from "./components/people/People"; // for   <People/>

function App() {
  return (
    <div className="App">
      <Login />
      <Channels />
      <Messages />
    </div>
  );
}

export default App;
