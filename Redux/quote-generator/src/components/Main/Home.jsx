import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from 'react-bootstrap/esm/Button';
import Footer from '../Footer';
import "./home.css"
function Home() {
  return (
    <div className='home'>
      <h1 className='heading'>Quote Generator</h1>
      <NavLink className="navLink" to="/designed-quotes">
      <button className='navlinkButton'>
     <span>Designed Quotes</span>
    <svg width="34" height="34" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="37" cy="37" r="35.5" stroke="black" stroke-width="3"></circle>
        <path d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z" fill="black"></path>
    </svg>
</button>
</NavLink>

        <br />
        <br />
        <br />
        <NavLink  className="navLink" to="/code-quotes" style={{color: "ghostwhite"}}>
       <button class="cssbuttons-io">
      <span><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0h24v24H0z" fill="none">
          </path>
          <path d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z" fill="currentColor">
            </path>
            </svg> Code Quotes</span>
      </button>
      </NavLink>
      <br />
      <br />
      <br />
      <Footer/>
    </div>
  )
}

export default Home