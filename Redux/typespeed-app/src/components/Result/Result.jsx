import {useEffect, useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { setModalStatus, setModalstate ,setAccuracy,resetGame, stopGame } from '../../redux/typespeedSlice'
import "./result.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {BiRefresh} from "react-icons/bi"
import 'bootstrap/dist/css/bootstrap.min.css';
function Result() {
  const {
     selectedLanguage,
     totalCorrectWords,
     totalWrongWords,
     correctWordsTick,
     wrongWordsTick,
    }= useSelector((state) => state.typespeed)
 
    const dispatch = useDispatch()

    function closeModal(){
      dispatch(resetGame())
      dispatch(setModalStatus(false))
      dispatch(stopGame())
    }


  return (
    <div className='result'>
      <div className='result-card-outline'>
         <div className='result-card'>
        <div className='result-card-components'>
        <Container className='container Container' >
        <Row>
          <Col id='heading'>{selectedLanguage==="EN" ? "Results" : "Sonuçlar"}</Col>
          </Row>
          <Row className='point'>
            <Col className='pointNumber'>{totalCorrectWords}
            <span className='Text'>{
            selectedLanguage==="EN" 
            ? "(WPM)" 
            : "(KDK)"
            }</span>
            </Col>
           
          </Row>
          <hr />
          <Row className='Row'>
            <Col className='text'>{selectedLanguage==="EN" ? "Keystroke" : "Basılan Tuş"}</Col>
            <Col className='numbers'>
              {"("}
                <span className='correctKeyStrokes'> {correctWordsTick} </span>
                {"/"}

                <span className='wrongKeyStrokes'> {wrongWordsTick} </span>
                {") "}

                <span className='TotalKeyStrokes'>{correctWordsTick+wrongWordsTick}</span>
            </Col>
          </Row>
          <hr />
          <Row className='Row'>
          <Col className='text'>{selectedLanguage==="EN" ? "Accuracy" : "Doğruluk"}</Col>
            <Col className='numbers'>
                <span className='accuracyValue'>{`${(
                  Math.round(totalCorrectWords *100) /
                  Math.round(totalCorrectWords +totalWrongWords)
                ).toFixed(2)  } %`}</span>
            </Col>
          </Row>
          <hr />
          <Row className='Row'>
          <Col className='text'>{selectedLanguage==="EN" ? "Correct Words" : "Doğru Kelimeler"}</Col>
            <Col className='numbers'>
                <span className='accuracyValue'>{totalCorrectWords}</span>
            </Col>
          </Row>
          <hr />
          <Row className='Row'>
          <Col className='text'>{selectedLanguage==="EN" ? "Wrong Words" : "Yanlış Kelimeler"}</Col>
            <Col className='numbers'>
                <span className='accuracyValue'>{totalWrongWords}</span>
            </Col>
          </Row>
          <hr />
          <Row>
        <button className='Button1' onClick={closeModal}>
      <BiRefresh className='RefreshButton '/>
      </button>
      </Row>
          </Container>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Result