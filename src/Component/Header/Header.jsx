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
        I'm Database Administrator. I design, manage, and optimize databases to ensure performance, security, and reliability. With a solid foundation in SQL, Linux, and database systems — and hands-on knowledge of frontend development (React, HTML, CSS, JavaScript) — I bridge the gap between data infrastructure and user-facing applications.
        </p>

        <div className="header-btn">
          <a href="#">
            <button className="contact-btn">Contact Me</button>
          </a>
          <a href="../public/cv_file/cv.pdf" download>
            <button className="cv-btn">Download CV</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
