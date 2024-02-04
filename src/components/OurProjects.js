// src/components/OurProjects.js
import React from "react";
import { Container } from "react-bootstrap";
import "./OurProjects.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "./Slider.css";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper";

import slide_image_1 from "../assets/r1.png";
import slide_image_2 from "../assets/r2.png";
import slide_image_3 from "../assets/r3.png";

const OurProjects = () => {
  return (
    <section id="projects" className="bg-dark text-light  ">
      <Container className="project_containerFluid" fluid style={{ background: "#000" }}>
        <Container className="project_content_container" >
          <div className="project_text_wrapper">
            <wrapper>
              <h1 className="page_heading">
                50 <span style={{ color: "#BC3131" }}>+ Projects</span>
              </h1>
              <h2 className="page_heading2">All Over The World</h2>
              <p className="page_text text">
                <span style={{ color: "#BC3131", fontWeight: "bold" }}>
                  Design Connect Studio
                </span>{" "}
                raises the ante in terms of design quality in over 50+ projects
                in Maharashtra. Our innovative approach to solutions and our
                approach to each vision will help transform it into reality.
                Your dream space awaits.
              </p>
              <p className="page_text mt-5">
                Keep on designing spaces in extraordinary excellence as we
                strive to reinvent the spaces.
              </p>
            </wrapper>
          </div>
          <div className="project_img_wrapper">
            <img className="project_img" src={require("../assets/project.png")} alt=""/>
            {/* <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
              }}
              pagination={{ el: ".swiper-pagination", clickable: true }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
                clickable: true,
              }}
              modules={[EffectCoverflow, Pagination, Navigation]}
              className="swiper_container p-4"
            >
              <SwiperSlide>
                <img
                  src={slide_image_1}
                  alt="slide_image"
                  className="slider_img"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={slide_image_2}
                  alt="slide_image"
                  className="slider_img"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={slide_image_3}
                  alt="slide_image"
                  className="slider_img"
                />
              </SwiperSlide>

              <div className="slider-controler">
                <div className="swiper-button-prev slider-arrow">
                  <ion-icon name="arrow-back-outline"></ion-icon>
                </div>
                <div className="swiper-button-next slider-arrow">
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </Swiper> */}
          </div>
        </Container>
      </Container>

      
    </section>
  );
};

export default OurProjects;
