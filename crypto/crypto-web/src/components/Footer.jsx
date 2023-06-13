import React from 'react'

function Footer() {
  return (
    <footer className='text-center'>
            <p style={{color: "white", fontSize: "25px"}}>Developed by
        <a href="https://github.com/musabolug">
        <button data-text="Awesome" className="ButtonLink">
        <span className="actual-text">&nbsp;MusabOlug&nbsp;</span>
        <span className="hover-text" aria-hidden="true">&nbsp;MusabOlug&nbsp;</span>
        </button>
        </a>
        </p>
    </footer>
  )
}

export default Footer