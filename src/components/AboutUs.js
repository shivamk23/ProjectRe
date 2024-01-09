// src/components/AboutUs.js
import React from "react";
import { Container } from "react-bootstrap";
import "./AboutUs.css";
const AboutUs = () => {
  return (
    <section id="about">
      <Container
        fluid
        className="d-flex flex-column flex-lg-row flex-md-row justify-content-between"
        style={{ background: "black" }}
      >
        <wrapper className="about_img_wrapper">
          <img className="about_img" src="/images/about.png" alt="" />
        </wrapper>
        <div className="about_text_wrapper">
          <wrapper>
            <h1 className="about_heading" style={{ color: "#ed440c" }}>
              Luxury Ahead
            </h1>
            <h1 className="about_heading2" style={{ color: "white" }}>
              <span style={{ color: "#ed440c" }}>Modern</span> Elegance
              Unfolding
            </h1>
            <p className="about_text mt-5">
              Indulge in opulence at our latest project: Behold modernity and
              tradition converging in a modern-day definition of luxury living.
            </p>
            <br />
            <p className="about_text">
              In Design Connect Studio, we welcome the story of sophistication
              and contemporary design where every detail speaks in unrivaled
              artistry.
            </p>
          </wrapper>
        </div>
      </Container>
    </section>
  );
};

export default AboutUs;
