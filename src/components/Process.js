import React from 'react'
import { Container } from 'react-bootstrap'
import "./Process.css"

const process = () => {
  return (
 <Container fluid className='process_containrFluid '>
<Container className='process_container'>
    <div>
        <img className='process_img' src={require("../assets/processImg2.png")} alt=""/>
    </div>
    
    <div className='process_text_wrapper'>
      <div>
      <h1 className='page_heading' style={{ color: "#BC3131" }}>our work process</h1>
      <h1 className='page_heading2' style={{ color: "#ffffff" }}> make your dream true</h1>
      </div>
   
<div className='process_flex_wrapper '>
<div>
<img alt=""/>
</div>

<div  className='page_text'>
<text style={{fontWeight:"500"}}>dream design</text><br/>
<text>Working with us to visualize your interior dream.</text>
</div>
</div>

<div className='process_flex_wrapper'>
<div>
<img alt=""/>
</div>

<div  className='page_text'>
<text style={{fontWeight:"500"}}>expert execution</text><br/>
<text>Our talented team creates style and perfection out of your vision.</text>
</div>
</div>

<div className='process_flex_wrapper'>
<div>
<img alt=""/>
</div>

<div  className='page_text'>
<text style={{fontWeight:"500"}}>client delight</text><br/>
<text>Your satisfaction at every step of the way is seamless journey.</text>
</div>
</div>

    </div>
</Container>
 </Container>
  )
}

export default process