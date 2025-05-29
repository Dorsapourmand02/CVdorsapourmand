import React from "react";
import "./Projects.css";
// import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";

function Projects() {
  const projects = [
    {
      title: "My CV",
      description:
        "A responsive and minimalistic personal portfolio website built with ReactJS to showcase my skills, education, experiences, and projects. This project serves as an interactive digital CV, allowing potential employers and clients to get to know me, my technical background, and the tools I work with.",
      github: "github link",
      technologies: "ReactJS, HTML, CSS, JavaScript",
      links: "https://github.com/Dorsapourmand02/CVdorsapourmand.git",
    },
  ];
  return (
    <div className="project-container">
      <div className="project-card">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          <SwiperSlide>
            <h4>{projects[0].title}</h4>
            <p>{projects[0].description}</p>
            <a href={projects[0].links}>
              <p>Project Github link</p>
            </a>
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
        </Swiper>
      </div>

      <div className="project-title">
        <h2>Projects</h2>
      </div>
    </div>
  );
}

export default Projects;
