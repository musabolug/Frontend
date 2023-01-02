import React, {useCallback, useMemo, useState } from 'react'
import "./App.css";
import Header from './components/Header';

function App_memoization() {
    const [number,setNumber] = useState(0);
    const [text,setText] = useState("");
    const increment =useCallback(() => {
        setNumber((prevState) => prevState+1)
    },[])
    // const data = useMemo(()=>{
    //    return calculateObject(number);
    // },[number]);
    // const data =calculateObject();
  return (
    <div className='App'>
        <Header  increment={increment}/>
        <hr/>
        <h1>{number}</h1>
        <button onClick={() => setNumber(number +1)} >Click</button>
        <br/>
        <br/>   
        <input value={text} onChange={({ target }) => setText(target.value)}/> 
    </div>
  );
}
function calculateObject(){
    console.log("Calculating");
    for(let i = 0; i<100000000; i++){}
    console.log("Completed")
    return {name : "Musab"}
}
export default App_memoization