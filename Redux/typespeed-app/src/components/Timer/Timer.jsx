import React, { useState, useEffect } from "react";
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import './Timer.css';
import { useDispatch , useSelector } from "react-redux";
function Timer() {
const {start , timerKey,timer, accuracy,totalCorrectWords} = useSelector((state) => state.typespeed)
  const [percentage, setPercentage] = useState(100);

 
  return (
    <div className="app">
        <div className="timer">
     <CountdownCircleTimer
    isPlaying={start}
    duration={timer}
    colors={["#3F84D5","#6378D1","#806BC7","#995BB7","#AD49A3","#3F84D5","#BB358A"]} 
    size={150}
    colorsTime={[60,48,36,24,12,0]}
    strokeWidth={8}
  >
    {({ remainingTime }) => 
    <div role="timer" aria-live="assertive"className="time" >
    {remainingTime}
    </div>
    }
  </CountdownCircleTimer>
  </div>

    <div className="card wordMin">
         <div className="card2">
        <div className="stats">
            <h1 className="mainStats">{totalCorrectWords}</h1>
        <p className="word" >word/min</p>
        </div>
        </div>
    </div>
    <div className="card accuracy">
         <div className="card2">
         <div className="stats">
            <h1 className="mainStats">{accuracy}</h1>
        <p className="word" >% accuracy</p>
        </div>
        </div>
    </div>


    </div>
  );
}

export default Timer;
