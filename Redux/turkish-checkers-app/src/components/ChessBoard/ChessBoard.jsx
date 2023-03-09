import React from 'react'
import "./chessboard.css"
import Tile from '../Tile/Tile'
const verticalAxis = ["1","2","3","4","5","6","7","8"]
const horizontalAxis = ["a","b","c","d","e","f","g","h"]
function ChessBoard() {
    let board= [];
    for(let j = verticalAxis.length-1 ; j >= 0; j--){
        for (let i = 0; i < horizontalAxis.length; i++) {
         const number = j + i + 2;
         
             board.push(<Tile number={number}/>)
        }

    }
      return (
    
    <div className='chessboard'>{board}</div>
  )
}
export default ChessBoard