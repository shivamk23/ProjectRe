// src/components/AboutUs.js
import React from "react";
import { Container } from "react-bootstrap";
import "./AboutUs.css";
const AboutUs = () => {
  return (
    <section id="aboutus">
      <Container
        fluid
        className=" g-0  d-flex flex-column flex-lg-row flex-md-row justify-content-between about_containerFluid">
        <wrapper className="about_img_wrapper">
          <img className="about_img" src="/images/about.png" alt="" />
        </wrapper>
        <div className="about_heading_wrapper">
          <wrapper>
            <h1 className="page_heading" style={{ color: "#BC3131" }}>
              Luxury Ahead
            </h1>
            <h1 className="page_heading2" style={{ color: "white" }}>
              <span style={{ color: "#BC3131" }}>Modern</span> Elegance
              Unfolding
            </h1>
            <div className="about_text_wrapper">
            <p className="page_text ">
              <span style={{fontWeight:"600"}}>Indulge in opulence at our latest project:</span> Behold modernity and
              tradition converging in a modern-day definition of luxury living.
            </p>
           
            <p className="page_text mt-5 ">
            <span style={{fontWeight:"600"}}>In Design Connect Studio,</span> we welcome the story of sophistication
              and contemporary design where every detail speaks in unrivaled
              artistry.
            </p>
            </div>
          </wrapper>
        </div>
      </Container>
    </section>
  );
};

export default AboutUs;
