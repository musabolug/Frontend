import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";
function Navbar() {
  return (
    <Router>
    <div className='d-flex Navbar sticky-top'>
      <HashLink to="/" className='text-decoration-none d-flex text-light ms-5'>
        <img src="https://www.figma.com/community/file/1136116317046811907/thumbnail/800?signature=80651d7c-d0b6-4d91-9805-e7ed32a3e6a6-cover" alt="" />
        <div className='d-flex align-items-center justify-content-center fs-3'>
        <span className=''>Crypto</span>
        </div>
        </HashLink>
        <div className='d-flex align-items-center justify-content-end w-100 '>
        <HashLink to="#trends" className='text-decoration-none d-flex text-light'>
        <span className='me-5 fs-4' >
          Trend Coinler
        </span>
        </HashLink>
        <HashLink to="#exchanges" className='text-decoration-none d-flex text-light'>

        <span className='me-5 pe-5 fs-4 '>
          Borsalar
        </span>
        </HashLink>
        </div>
    </div>  
    </Router>
  )
}

export default Navbar