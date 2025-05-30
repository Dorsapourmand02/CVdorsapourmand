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
          I'm Frontend developer skilled in HTML, CSS, Wordpress, JavaScript,
          and React. Currently expanding my backend skills using PHP. Open to
          collaboration and freelance opportunities.
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
