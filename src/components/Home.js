import React from 'react'
import { Container } from 'react-bootstrap'
import "./Home.css"

const Home = () => {
  return (
  <Container fluid className='g-0 home_containerFluid' id="home">
<Container className='d-flex justify-content-between align-items-center'>
    <img className="home_img"src={require("../assets/decoHome.png")} alt=""/>
    <div className='home_text_wrapper'>
        <h1 className='page_heading'>MODERN</h1>
        <h1 className='page_heading2'>INTERIORS</h1>
        <p className='page_text'>Design Connect Studio elevates your space with superior modern interiors.</p>
    </div>
</Container>
  </Container>
  )
}

export default Home