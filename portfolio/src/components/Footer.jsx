import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import logo from "../assets/img/logo.svg"
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';


function Footer() {
  return (
    <footer className='footer'>
        <Container>
            <Row className="align-item-center">
              
                <Col sm={6} >
                    <img src={logo} alt="" />

                </Col>
                <Col sm={6} className='text-center text-sm-end'>
                    <div className='social-icon'>
                        <a href="https://www.linkedin.com/in/musab-b-m-olu%C4%9F-711a58225"> <img src={navIcon1} alt="" /></a>
                        <a href="https://github.com/musabolug"> <img src={navIcon2} alt="" /></a>
                        <a href="https://www.instagram.com/musabolug/"> <img src={navIcon3} alt="" /></a>
                    </div>
                </Col>
        <Col className='text-center'>
        <p style={{color: "white", fontSize: "25px"}}>Developed by
        <a href="https://github.com/musabolug">
        <button data-text="Awesome" className="ButtonLink">
        <span className="actual-text">&nbsp;MusabOlug&nbsp;</span>
        <span className="hover-text" aria-hidden="true">&nbsp;MusabOlug&nbsp;</span>
        </button>
        </a>
         </p>
    </Col>
            </Row>
        </Container>
        
    </footer>
  )
}

export default Footer