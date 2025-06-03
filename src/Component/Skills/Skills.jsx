import React from "react";
import "../Skills/Skills.css";
import HTMLLOGO from "../../images/htmllogo.svg.png";
import CSSLOGO from "../../images/csslogo.png";
import JSLOGO from "../../images/jslogo.webp";
import REACTLOGO from "../../images/reactlogo.png";
import PHPLOGO from "../../images/phplogo.png";
import GITLOGO from "../../images/gitlogo.webp";
import WPLOGO from "../../images/wplogo.png";
import BSLOGO from "../../images/bootstraplogo.png";
import SQL from "../../images/Mysqllogo.png";
import LINUXLOGO from "../../images/linuxlogo.png";
// import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
function Skills() {
  const skills = [
    { name: "HTML", logo: HTMLLOGO },
    { name: "CSS", logo: CSSLOGO },
    { name: "JavaScript", logo: JSLOGO },
    { name: "React", logo: REACTLOGO },
    { name: "PHP", logo: PHPLOGO },
  ];

  const skills2 = [
    { name: "Git", logo: GITLOGO },
    { name: "Mysql", logo: SQL },
    { name: "BootStrap", logo: BSLOGO },
    { name: "WordPress", logo: WPLOGO },
    { name: "Linux", logo: LINUXLOGO },
  ];

  return (
    <div className="skills-content">
      <div className="skill-container">
        <div className="skill-title">
          <h1 className="skill-name">SKILLS</h1>
        </div>
        <div className="skills-item">
          <div className="row-1">
            {skills.map((skill, index) => (
              <div className="skill" key={index}>
                <img src={skill.logo} alt={skill.name} />
                <div className="skillname">
                  <p>{skill.name}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="row-2">
            {skills2.map((skill, index) => (
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
      <div className="skill-responsive">
        <Swiper
        
          spaceBetween={30}
          // centeredSlides={true}
          centeredSlides={false}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,

          }}
          breakpoints={{
            0: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
      
          }}
          slidesPerView={4} 
          pagination={{
            clickable: true,
          }}
          // navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="myskill-swiper"
        >
          <SwiperSlide className="skills-slide">
            <div className="skill-swip">
              <div className="skills-img">
                <img src={skills[0].logo} alt="" />
              </div>
              <div className="skills-title">
                <p>{skills[0].name}</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="skills-slide">
            <div className="skill-swip">
              <div className="skills-img">
                <img src={skills[1].logo} alt="" />
              </div>
              <div className="skills-title">
                <p>{skills[1].name}</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="skills-slide">
            <div className="skill-swip">
              <div className="skills-img">
                <img src={skills[2].logo} alt="" />
              </div>
              <div className="skills-title">
                <p>{skills[2].name}</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="skills-slide">
            <div className="skill-swip">
              <div className="skills-img">
                <img src={skills[3].logo} alt="" />
              </div>
              <div className="skills-title">
                <p>{skills[3].name}</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="skills-slide">
            <div className="skill-swip">
              <div className="skills-img">
                <img src={skills[4].logo} alt="" />
              </div>
              <div className="skills-title">
                <p>{skills[4].name}</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="skills-slide">
            <div className="skill-swip">
              <div className="skills-img">
                <img src={skills2[0].logo} alt="" />
              </div>
              <div className="skills-title">
                <p>{skills2[0].name}</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="skills-slide">
            <div className="skill-swip">
              <div className="skills-img">
                <img src={skills2[1].logo} alt="" />
              </div>
              <div className="skills-title">
                <p>{skills2[1].name}</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="skills-slide">
            <div className="skill-swip">
              <div className="skills-img">
                <img src={skills2[2].logo} alt="" />
              </div>
              <div className="skills-title">
                <p>{skills2[2].name}</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="skills-slide">
            <div className="skill-swip">
              <div className="skills-img">
                <img src={skills2[3].logo} alt="" />
              </div>
              <div className="skills-title">
                <p>{skills2[3].name}</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="skills-slide">
            <div className="skill-swip">
              <div className="skills-img">
                <img src={skills2[4].logo} alt="" />
              </div>
              <div className="skills-title">
                <p>{skills2[4].name}</p>
              </div>
            </div>
          </SwiperSlide>

        </Swiper>
      </div>
    </div>
  );
}

export default Skills;
