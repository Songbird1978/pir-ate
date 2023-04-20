import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import '../../index.css'


function Logo() {
  return (
    <div className="logo">
      <Link to="/" className="link">
        <h1>Pir@te</h1>
      </Link>
    </div>
  );
}

export default Logo;