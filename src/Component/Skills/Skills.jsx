import React from "react";
import "../Skills/Skills.css";
import HTMLLOGO from "../../images/htmllogo.svg.png";
import CSSLOGO from "../../images/csslogo.png";
import JSLOGO from "../../images/jslogo.webp";
import REACTLOGO from "../../images/reactlogo.png";
import PHPLOGO from "../../images/phplogo.png"
import GITLOGO from "../../images/gitlogo.webp"
import WPLOGO from "../../images/wplogo.png"
import BSLOGO from "../../images/bootstraplogo.png"
import FIGMALOGO from "../../images/figmalogo.svg"
import LINUXLOGO from "../../images/linuxlogo.png"

function Skills() {
  return (
    <div className="skill-container">
      <div className="skill-title">
        <h1 className="skill-name">SKILLS</h1>
      </div>
      <div className="skills-item">
        <div className="row-1">
          <div className="skill">
            <img src={HTMLLOGO} />
            <div className="skillname">
              <p>HTML</p>
            </div>
          </div>
          <div className="skill">
            <img src={CSSLOGO} />
            <div className="skillname">
              <p>CSS</p>
            </div>
          </div>
          <div className="skill">
            <img src={JSLOGO} />
            <div className="skillname">
              <p>JavaScript</p>
            </div>
          </div>
          <div className="skill">
            <img src={REACTLOGO} />
            <div className="skillname">
              <p>React</p>
            </div>
          </div>
          <div className="skill">
            <img src={PHPLOGO} />
            <div className="skillname">
              <p>PHP</p>
            </div>
          </div>
        </div>
        <div className="row-2">
          <div className="skill">
            <img src={GITLOGO} />
            <div className="skillname">
              <p>Git</p>
            </div>
          </div>
          <div className="skill">
            <img src={BSLOGO} />
            <div className="skillname">
              <p>BootStrap</p>
            </div>
          </div>
          <div className="skill">
            <img src={WPLOGO} />
            <div className="skillname">
              <p>Wordpress</p>
            </div>
          </div>
          <div className="skill">
            <img src={FIGMALOGO} />
            <div className="skillname">
              <p>Figma</p>
            </div>
          </div>
          <div className="skill">
            <img src={LINUXLOGO} />
            <div className="skillname">
              <p>Linux</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
