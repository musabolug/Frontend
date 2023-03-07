import React, { useState, useEffect } from "react";
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import './Timer.css';
import { useDispatch , useSelector } from "react-redux";
import { setModalstate } from "../../redux/typespeedSlice";
function Timer() {
const {start , timerKey,timer, accuracy,totalCorrectWords, selectedLanguage, modalOpen} = useSelector((state) => state.typespeed)
const dispatch = useDispatch()
 const renderTime = ({remainingTime}) =>{
  if(remainingTime === 0){
    dispatch(setModalstate())
 }else{
  return(
    <div role="timer" aria-live="assertive"className="time" >
    {remainingTime}
    </div>
      )
 }
}
  return (
    <div className="app">
        <div className="timer">
     <CountdownCircleTimer
     key={timerKey}
    isPlaying={start}
    duration={timer}
    colors={["#3F84D5","#6378D1","#806BC7","#995BB7","#AD49A3","#3F84D5","#BB358A"]} 
    size={150}
    colorsTime={[60,48,36,24,12,0]}
    strokeWidth={8}
  >
   {renderTime} 
  </CountdownCircleTimer>
  </div>

    <div className="card">
         <div className="card2">
        <div className="stats">
            <h1 className="mainStats">{totalCorrectWords}</h1>
        <p className="word" >{selectedLanguage==="EN"?"word / min":"kelime / dk"}</p>
        </div>
        </div>
    </div>
    </div>
  );
}

export default Timer;
