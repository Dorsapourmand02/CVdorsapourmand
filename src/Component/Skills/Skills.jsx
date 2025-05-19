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
import SQL from "../../images/Mysqllogo.png"
import LINUXLOGO from "../../images/linuxlogo.png"

function Skills() {

  const skills = [
    {name:"HTML" , logo: HTMLLOGO},
    {name:"CSS" , logo: CSSLOGO},
    {name:"JavaScript" , logo:JSLOGO},
    {name:"React" , logo:REACTLOGO},
    {name:"PHP" , logo:PHPLOGO},

  ]

  const skills2 = [
    {name:"Git" , logo:GITLOGO},
    {name:"Mysql" , logo:SQL},
    // {name:"Mysql" , logo:SQL},
    {name:"BootStrap" , logo:BSLOGO},
    {name:"WordPress" , logo:WPLOGO},
    {name:"Linux" , logo:LINUXLOGO},


    
  ]

  return (
    <div className="skill-container">
      <div className="skill-title">
        <h1 className="skill-name">SKILLS</h1>
      </div>
      <div className="skills-item">
        <div className="row-1">
          {skills.map((skill,index) => (
            <div className="skill" key={index}>
              <img src={skill.logo} alt={skill.name} />
              <div className="skillname">
                <p>{skill.name}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="row-2">
        {skills2.map((skill,index) => (
            <div className="skill" key={index}>
              <img src={skill.logo} alt={skill.name} />
              <div className="skillname">
                <p>{skill.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
