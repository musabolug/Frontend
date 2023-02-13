import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import {increment,decremnet,incrementByAmount} from "../redux/counter/counterSlice"
import { useState } from 'react'

function Counter() {
    const [amount,setAmount] = useState(3);
    const countValue = useSelector((state)=> state.counter.value)
    const dispatch = useDispatch();
  return (
    <div>
        <h1>{countValue}</h1>
             
        <button onClick={() => dispatch(decremnet())}>Decrement</button>
        <button onClick={() => dispatch(increment())}>Increment</button>
        
        <br />
        <br />
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}/>
        <button onClick={() => dispatch(incrementByAmount(amount))}>increment By Amount</button>

        
    </div>
  )
}

export default Counter