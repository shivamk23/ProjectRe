import React from 'react'
import { Container } from 'react-bootstrap'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./Clients.css"

function Clients() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        arrows:false,
        
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
        ],
      };

  return (
  <Container fluid className='client_fluid'>
<Container className='client_container'>
    <div className='clinet_heading_wrapper'>
<p className='page_heading'>what <span style={{color:"#AB1322"}}>OUR CLIENTS</span> </p>
<p className='page_heading2' style={{marginTop:"-15px"}}>ARE SAYING</p>
</div>
<Slider {...settings} className='slider'>
   
<div className='review_main_div'>
    <div className='flex_div'>
<img className='line' src={require("../assets/line.png")}alt=""/>
<p>Firm is having experience & good contacts, specially having all women partners expertise in diversified areas. Excellent designs and work, keep growing.</p>
</div>
<div className='flex_div'>
    <img src={require("../assets/c1.png")} alt=""/>
    <p style={{fontWeight:600}}>ankit yadav</p>
</div>
</div>

<div className='review_main_div'>
    <div className='flex_div'>
<img className='line' src={require("../assets/line.png")}alt=""/>
<p>Design Connect Studio provides excellent quality, affordable, and timely interior design. Highly recommended!</p>
<br/>
<br/>
</div>
<div className='flex_div'>
    <img src={require("../assets/c2.png")} alt=""/>
    <p style={{fontWeight:600}}>shivani gupta</p>
</div>
</div>

<div className='review_main_div'>
    <div className='flex_div'>
<img className='line' src={require("../assets/line.png")}alt=""/>
<p>Design Connect studio is a truly customer-centric interior designer. They go above and beyond to ensure customer satisfaction, without compromising on quality. </p>
</div>
<div className='flex_div'>
    <img src={require("../assets/c3.png")} alt=""/>
    <p style={{fontWeight:600}}>arjun singh</p>
</div>
</div>


</Slider>
</Container>
  </Container>
  )
}

export default Clients
