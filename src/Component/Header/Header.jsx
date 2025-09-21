import React from "react";
import "../Header/Header.css";

function Header() {
  return (
    <div className="header-container">
      <div className="header-title">
        <div className="intro">
    
          <h1>Hi I'm</h1>
          <h2>Dorsa Pourmand</h2>
        </div>
        <p>
        I'm Database Administrator (DBA) in progress. I design, manage, and optimize databases to ensure performance, security, and reliability. With SQL expertise and a strong foundation in Linux, I’m building solutions for real-world data challenges.
        </p>

        <div className="header-btn">
          <a href="#">
            <button className="contact-btn">Contact Me</button>
          </a>
          <a href="#">
            <button className="cv-btn">Download CV</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
