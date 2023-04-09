import React from "react";
import "./style.css";
import logo from '../../assets/piratelogo.png';

function Logo() {
return (
    <div className="logo"> 
      <img src={logo} alt="logo" className="logo" />
    </div>
);
}

export default Logo;