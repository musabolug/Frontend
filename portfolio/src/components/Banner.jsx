/* eslint-disable no-unused-vars */
import {useState, useEffect} from 'react'
import {Container , Row, Col} from "react-bootstrap"
import {ArrowRightCircle} from "react-bootstrap-icons"
import HeaderImg from "../assets/img/header-img.svg"
import "animate.css"
import TrackVisibility from 'react-on-screen'

function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Web Designer", "UI/UX Designer" ];
  const period = 2000;

  useEffect(()=>{
    let ticker = setInterval(()=>{
        tick()
    },delta)
    return () => {clearInterval(ticker)}
  },[text])

  const  tick = () =>{
    let i = loopNum % toRotate.length;
    let fullText =  toRotate[i];
    let updatedText = isDeleting? fullText.substring(0,text.length - 1 ) : fullText.substring(0, text.length + 1)

    setText(updatedText) 

    if(isDeleting){
        setDelta(prevDelta => prevDelta / 2 ) 
    }

    if(!isDeleting && updatedText === fullText){
        setIsDeleting(true)
        setIndex(prevIndex => prevIndex-1)
        setDelta(period)
    }else if(isDeleting && updatedText === ""){
      setIsDeleting(false)
      setLoopNum(loopNum+1)
      setDelta(500)
      setIndex(1)
    }else{
      setIndex(prevIndex => prevIndex+1)
    }
  } 

  return (
    <section className='banner' id='home'> 
    <Container>
    <TrackVisibility>
          {({isVisible})=>
              <div className={isVisible ? "animate__animated animate__fadeInDown":"" }>
     <Row className='align-items-center'>
        <Col xs={12} md={6} xl={7}>
        
              <span className='tagline'>Welcome to my Portfolio</span>
              <h1>{"Hi I'm Musabolug"} <br /><span className='wrap'>{text}</span> </h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus nihil libero quas totam dolor similique, in, expedita sed repellendus culpa ipsam dolorem magnam vitae iste tempore, magni eveniet provident adipisci.</p>
              <button onClick={()=> console.log("Connect")}>Let’s Connect <ArrowRightCircle size={25} /></button>
         
            
        </Col>
        <Col xs={12} md={6} xl={5}>
            <img src={HeaderImg} alt="Header Img" />
        </Col>
     </Row>
     </div>}
          </TrackVisibility>
    </Container>

    </section>
  )
}

export default Banner