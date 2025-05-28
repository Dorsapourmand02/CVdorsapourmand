import React, { useState } from "react";
import "../Experience/Experience.css";

function Experience() {
  const [previewText, setPreviewText] = useState("Hover over a dot to see details");

  const timelines = [
    { text: "Academy of Architecture (2021–2025) – Website Admin" },
    { text: "Sanasystem PIDMCO (2025–  ) – Website Admin , Software support" },
    { text: "Sanasystem Persian Gulf Bidboland Gas Refining Company (2025–  ) – Software support" },
    { text: "More experiences coming soon..." }
  ];

  return (
    <div className="experience-container">
      <div className="experience-title">
        <h1>Experiences</h1>
      </div>

      <div className="timeline-shape">
        {timelines.map((item, index) => (
          <React.Fragment key={index}>
            <div
              className="dot"
              onMouseEnter={() => setPreviewText(item.text)}
              onMouseLeave={() => setPreviewText("Hover over a dot to see details")}
            ></div>
            {index < timelines.length - 1 && <div className="line"></div>}
          </React.Fragment>
        ))}
      </div>

      <div className="preview-box" id="previewBox">
        {previewText}
      </div>
    </div>
  );
}

export default Experience;