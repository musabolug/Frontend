import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./header.css"
import {fillCards,resetGame} from "../../redux/cardsSlice"
function Header() {

    const [btn,setBtn] =  useState("start")
    const dispatch = useDispatch();
    const  beginScore = useSelector((state) => state.cards.beginScore)
    const  correctMatch= useSelector((state)=> state.cards.correctMatch)
    const  wrongMatch= useSelector((state)=> state.cards.wrongMatch)
    const  openedCards= useSelector((state)=> state.cards.openedCards)
    const  closedCards= useSelector((state)=> state.cards.closedCards)

    const handlePlay = () =>{
        if(btn === "start"){
            dispatch(fillCards())
            setBtn("reset")
        }else if(btn === "reset"){
         if (window.confirm("are you sure to reset game?")){
            dispatch(resetGame());
            setBtn("start")
         }
        
    }
    }
    useEffect(()=>{
        closedCards === 0 && setBtn("start");
    },[closedCards])
  return (
    <div className='main bgColor'>
        <h1>Match the Rulers</h1>
        <Container className='.container'>
            <Row className='justify-content-md-center'>
            <Col className='left'>
                <h3>Your Score:{beginScore}</h3>
                <h3>Notes:</h3>
                <p>*YOUR STARTING SCORE IS <span style={{color: "deeppink"}}>{beginScore}</span></p>
                <p>*EACH CORRECT MATCH IS <span style={{color: "hsl(124, 70%, 44%)"}}>{correctMatch}</span> POINTS</p>
                <p>*EACH WRONG MATCH IS <span style={{color: "red"}}>{wrongMatch}</span> POINTS</p>
            </Col>
            <Col className='button'  >
            <button onClick={() => handlePlay()}>
                {
                    btn ==="start"
                    ?
                    "P L A Y"
                    :
                    "R E S E T"
                }
            
                <div div id="clip">
                <div id="leftTop" className="corner"></div>
                <div id="rightBottom" className="corner"></div>
                <div id="rightTop" className="corner"></div>
                <div id="leftBottom" className="corner"></div>
            </div>
            <span id="rightArrow" className="arrow"></span>
            <span id="leftArrow" className="arrow"></span>
            </button>
            </Col>
            <Col className='scores'>
            <h3>Closed Cards: {closedCards}</h3>
            <h3>Opened Cards: {openedCards}</h3>

            </Col>
            </Row>
        </Container>

    </div>


  )
}

export default Header