import React from 'react'
import { Container } from 'react-bootstrap'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./Innovator.css"

const Innovator = () => {
    // Slick settings for responsiveness
    const settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
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
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
      ],
    };
  return (
    <Slider {...settings}>
    <div>
    <Container fluid className='inno_fluid '>
<Container className='inno_container'>
    <div className='inno_text_wrapper' >
    <h1 className='page_heading' style={{color:"#BC3131"}}>design </h1>
    <h1 className='page_heading2'>Innovators</h1>
    <p className='page_text text-black inno_text_para'><span style={{color:"#AB1322",fontWeight:"600"}}>Ar. Harshada Budhavant,</span><br/>
a Pune University graduate, infuses Design Connect Studio with subtle yet impactful designs, showcasing a commitment to creativity that enhances every project she undertakes.</p>
</div>
<div className='d-flex justify-content-end '>
    <img className='team_img' src={require("../assets/team1.png")} alt=""/>
</div>
</Container>
   </Container>
    </div>
   
    <div>
    <Container fluid className='inno_fluid mt-3'>
<Container className='inno_container'>
    <div className='inno_text_wrapper' >
    <h1 className='page_heading' style={{color:"#BC3131"}}>design </h1>
    <h1 className='page_heading2'>Innovators</h1>
    <p className='page_text text-black inno_text_para'><span style={{color:"#AB1322",fontWeight:"600"}}>Ar. bhairavi wagh palande, </span><br/>
    a bold and free-flowing alumna of Pune University, imparts a distinctive flair to Design Connect Studio. Her fearless design approach crafts spaces resonating with a liberating sense of freedom.</p>
</div>
<div className='d-flex justify-content-end '>
    <img className='team_img' src={require("../assets/team2.png")} alt=""/>
</div>
</Container>
   </Container>
    </div>

    <div>
   <Container fluid className='inno_fluid mt-3'>
<Container className='inno_container w-100'>
    <div className='inno_text_wrapper' >
    <h1 className='page_heading' style={{color:"#BC3131",fontWeight:"500"}}>design </h1>
    <h1 className='page_heading2'>Innovators</h1>
    <p className='page_text text-black inno_text_para'><span style={{color:"#AB1322",fontWeight:"600"}}>Ar. Samvedna Jadhav, </span><br/>
    armed with an Environmental Architecture background and both M.Arch and B.Arch from Pune University, introduces intensity, depth, and circular thinking to Design Connect Studio. Her unique perspective transforms spaces, transcending the ordinary in the studio's approach.</p>
</div>
<div className='d-flex justify-content-end '>
    <img className='team_img' src={require("../assets/team3.png")} alt=""/>
</div>
</Container>
   </Container>
    </div>
    {/* Add more slides as needed */}
  </Slider>
   
  )
}

export default Innovator