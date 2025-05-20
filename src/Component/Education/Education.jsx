import React from "react";
import "../Education/Education.css";
import goilogo from "../../images/UOGlogo.png";

function Education() {
  const degrees = [
    {
      name: "University of Guilan",
      degree: "Bachelor of computer science",
      year: "2020-2025",
    },
    {
      name: "University of Guilan",
      degree: "International Conference on soft computing",
      year: "6 March 2024",
    }
  ];

  return (
    <div className="education-container">
      <div className="edu-title">
        <h1>Graduation & Degrees</h1>
      </div>
      <div className="grad-cards">
        <div className="grad-card">
          {/* <h2 className="gard-title">University</h2> */}
          <div className="gard-detail">
            <img className="gard-img" src={goilogo} alt="" />
           <div className="detail-text">
            <h4>{degrees[0].name}</h4>
            <h5>{degrees[0].degree}</h5>
            <h6>{degrees[0].year}</h6>
           </div>
           
          </div>

        </div>
        <div className="grad-card">
        <div className="gard-detail">
            <img className="gard-img" src={goilogo} alt="" />
           <div className="detail-text">
            <h4>{degrees[1].name}</h4>
            <h5>{degrees[1].degree}</h5>
            <h6>{degrees[1].year}</h6>
           </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
