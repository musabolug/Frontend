import React from 'react'
import "./Result.css"
import { useSelector,useDispatch } from 'react-redux'
import { closeResult } from '../../redux/gameSlice'
function Result() {
    const {winner} = useSelector((state)=> state.game)
    const dispatch = useDispatch()
   const handleClick = ()=>{
    dispatch((closeResult()))
   }
    
  return (
    <div className='result'>
        <div className="card">
    <div className="container-image">
            <img className="image-circle" src="https://github.com/musabolug/Frontend/blob/master/Redux/chess-app/src/assets/Bqueen.png?raw=true" alt="" />
    </div>
    <div className="content">
      <div className="detail">
        <span>Winner<br/>{winner}</span>
        <button onClick={(e)=>handleClick()}>Close</button>
      </div>
      <div className="product-image">
        <div className="box-image">
          <img className="img-product" src="https://github.com/musabolug/Frontend/blob/master/Redux/chess-app/src/assets/Bqueen.png?raw=true" alt="" />

           </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Result