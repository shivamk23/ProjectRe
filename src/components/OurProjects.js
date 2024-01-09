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

import slide_image_1 from "../assets/images/r1.png";
import slide_image_2 from "../assets/images/r2.png";
import slide_image_3 from "../assets/images/r3.png";

const OurProjects = () => {
  return (
    <section id="projects" className="bg-dark text-light ">
      <Container fluid style={{ background: "#000" }}>
        <div className="project_wrapper" style={{ display: "flex" }}>
          {/* <div className="project_text_wrapper">
            <wrapper>
              <h1>
                50 <span style={{ color: "#cc481d" }}>+ Projects</span>
              </h1>
              <h2>All Over The World</h2>
              <p>
                <span style={{ color: "#cc481d", fontWeight: "bold" }}>
                  Design Connect Studio
                </span>{" "}
                raises the ante in terms of design quality in over 50+ projects
                in Maharashtra. Our innovative approach to solutions and our
                approach to each vision will help transform it into reality.
                Your dream space awaits.
              </p>
              <p>
                Keep on designing spaces in extraordinary excellence as we
                strive to reinvent the spaces.
              </p>
            </wrapper>
          </div> */}
          <div className="project_img_wrapper">
            <Swiper
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
            </Swiper>
          </div>
        </div>
      </Container>

      <Container
        fluid
        className="d-flex flex-column flex-lg-row flex-md-row justify-content-between"
        style={{ background: "black" }}
      >
        <div className="project_img_wrapper">
          <img className="project_img" src="/Images/group.png" alt="" />
        </div>
        <div className="project_text_wrapper">
          <wrapper>
            <div>
              <h1 className="project_heading">
                <span style={{ color: "#cc481d" }}>Our Work Process</span>
              </h1>
              <h2 className="project_heading">Make Your Dream True</h2>
              <ol className="project_text_list">
                <li>
                  Dream Design
                  <p>Working with us to visualize your interior dream.</p>
                </li>
                <li>
                  Expert Execution
                  <p>
                    Our talented team creates style and perfection out of your
                    vision.
                  </p>
                </li>
                <li>
                  Client Delight
                  <p>
                    Your satisfaction at every step of the way is seamless
                    journey.
                  </p>
                </li>
              </ol>
            </div>
          </wrapper>
        </div>
      </Container>

      <Container fluid style={{ background: "white" }}>
        <div className="project_wrapper" style={{ display: "flex" }}>
          <div className="project_text_wrapper">
            <wrapper>
              <h1 className="designer_text">
                <span style={{ color: "#cc481d" }}>Design</span> <br />
                Innovators
              </h1>
              <br />
              <p className="designer_text">
                <span style={{ color: "#cc481d", fontWeight: "bold" }}>
                  Ar. Harshada Budhavant,
                </span>{" "}
                <br />a Pune University graduate, infuses Design Connect Studio
                with subtle yet impactful designs, showcasing a commitment to
                creativity that enhances every project she undertakes.
              </p>
            </wrapper>
          </div>
          <div className="project_img_wrapper">
            <img className="image" src="/Images/pic1.png" alt="Image 1" />
            <img className="image" src="/Images/pic2.png" alt="Image 2" />
            <img className="image" src="/Images/pic3.png" alt="Image 3" />{" "}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OurProjects;
