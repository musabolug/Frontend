import React from 'react'
import videoBg2 from "./videoBg2.mp4"
import imgBg from "./imgBg.jpg"
function Background() {
  return (
   <div className='main'>
    <div className="overlay"></div>
    <video id='videoBg' src={videoBg2} autoPlay loop muted/>
    {/* <img  src={imgBg} alt="img" /> */}
    
    
</div>
  )
}

export default Background
