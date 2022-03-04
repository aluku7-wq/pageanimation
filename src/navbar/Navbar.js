/** @format */

import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <p>perf</p>
        <img src="../images/logo.png" alt="" />
        <p>me</p>
      </div>
      <div className="menu">
        <div className="icon">
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
