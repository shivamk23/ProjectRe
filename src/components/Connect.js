import React from 'react'
import { Container } from 'react-bootstrap'
import "./Connect.css"
import Contactform from '../Contactform/Contactform'

const Connect = () => {
  return (
    <Container fluid id="contact">
<Container  className='contact_container'>
  <div className='Connect_text_wrapper'>
  <h1 className='page_heading' style={{color:"#BC3131"}}>Design Connect Studio  </h1>
      <h1 className='page_heading2'>Elevates Creativity</h1>
        <p className='page_text mt-4 text-black'> <span style={{fontWeight:"600",color:"#BC3131"}}>Design Connect Studio</span>  is a company that came up in 2017 and supports simplicity that is “Form Follows Function”. We offer architecture, interior, landscape design, green building consulting, liasoning services and custom furniture, combining innovation and elegance with every project.</p>
      <p className='page_text text-black'> <span style={{fontWeight:"600",color:"#BC3131"}}>Design Connect Studio</span> believes in making Designs that are Attractive, yet fully functional. Our services are a perfect combination of creativity and functionality, from architectural finesse to bespoke furniture. </p>
    </div>
   
    <div className='form_wrapper'>
        <Contactform/>
    </div>
    </Container>
    </Container>
  )
}

export default Connect
