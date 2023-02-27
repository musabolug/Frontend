import React from 'react'
import "./footer.css"
import Button from 'react-bootstrap/Button';
function Footer() {
  return (
    <div>
        <p style={{color: "white", fontSize: "25px"}}>Developed by
        <a href="https://github.com/musabolug">
        <button data-text="Awesome" class="ButtonLink">
        <span class="actual-text">&nbsp;MusabOlug&nbsp;</span>
        <span class="hover-text" aria-hidden="true">&nbsp;MusabOlug&nbsp;</span>
        </button>
        </a>
         </p>
    </div>
  )
}

export default Footer