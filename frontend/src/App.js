import "./App.css";
import Login from "./components/login/Login";
import HomePage from "./components/home-page/HomePage";

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/" element={<HomePage />}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
