import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import '../../index.css'


function Logo() {
  return (
    <div className="logo">
      <Link to="/HomeTwo" className="logoLink">
        <h1>P!R@TE LAB</h1>
      </Link>
    </div>
  );
}

export default Logo;