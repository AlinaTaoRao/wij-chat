import "./styles.css";

import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login-form">
      <Link to={"/"}>
        <button>Login</button>
      </Link>
    </div>
  );
}
