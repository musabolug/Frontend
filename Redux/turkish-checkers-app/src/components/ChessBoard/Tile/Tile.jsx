import {useState,useEffect} from 'react'
import "./Tile.css"
import { ReactDOM } from 'react'
import { selectStone ,moveStone,setPlayer} from '../../../redux/gameSlice'
import {useDispatch, useSelector} from "react-redux"
import Point from "../../../assets/points.png" 
function Tile({cellData}) {
  const {selectedStone ,movableAreas,showHint,player} = useSelector((state) => state.game)
 const bgColor = cellData.color 
  
  
 const dispatch = useDispatch()
 
 const handleClick = (e)=>{
   if(e.target.classList.contains("chessPiece")){
     dispatch(selectStone(e.target.id))

    }
    if(e.target.classList.contains("hint")){
      dispatch(moveStone(e.target.id))
      if(player === "white"){
        dispatch(setPlayer("black"))
      }else{
        dispatch(setPlayer("white"))
      }
    }
  }
  
  return(
    <div id={cellData.id}  onClick={(e)=> handleClick(e)} className={` tile   ${ selectedStone === cellData.id?"active":bgColor} `}>
      {
        movableAreas  && showHint &&
       movableAreas.flat().map(
          (id) => id === cellData.id ?( 
          <div id={cellData.id} className={showHint? "hint":""}>
            
              <img className={showHint? "hint":""} id={cellData.id} src={Point} alt="" />
            </div>): ""
          )
       }
      
        {
            cellData.positionX === "a" && <span className='positionY'>{cellData.positionY}</span>
        }
          {/**White PIECES */}
        {
         
          cellData.stoneData.name === "white-pawn" &&
        <div id={cellData.stoneData.id} style={{backgroundImage: `url(${cellData.stoneData.src})`}} className="chessPiece"></div>
        }
          {
            cellData.stoneData.name === "white-rook"&&
           <div id={cellData.stoneData.id} style={{backgroundImage: `url(${cellData.stoneData.src})`}} className="chessPiece"></div>
        }
        {
            cellData.stoneData.name === "white-knight"&&
           <div id={cellData.stoneData.id} style={{backgroundImage: `url(${cellData.stoneData.src})`}} className="chessPiece"></div>
        }
        {
            cellData.stoneData.name === "white-bishop"&&
           <div id={cellData.stoneData.id}style={{backgroundImage: `url(${cellData.stoneData.src})`}} className="chessPiece"></div>
        }
        {
            cellData.stoneData.name === "white-queen"&&
           <div id={cellData.stoneData.id}style={{backgroundImage: `url(${cellData.stoneData.src})`}} className="chessPiece"></div>
        }
        {
            cellData.stoneData.name === "white-king"&&
           <div id={cellData.stoneData.id} style={{backgroundImage: `url(${cellData.stoneData.src})`}} className="chessPiece"></div>
        }

         {/**BLACK PIECES */}
        {
             cellData.stoneData.name === "black-pawn" &&
            <div id={cellData.stoneData.id} style={{backgroundImage: `url(${cellData.stoneData.src})`}} className="chessPiece"></div>
        }
          {
            cellData.stoneData.name === "black-rook"&&
           <div id={cellData.stoneData.id} style={{backgroundImage: `url(${cellData.stoneData.src})`}} className="chessPiece"></div>
        }
        {
            cellData.stoneData.name === "black-knight"&&
           <div id={cellData.stoneData.id} style={{backgroundImage: `url(${cellData.stoneData.src})`}} className="chessPiece"></div>
        }
        {
            cellData.stoneData.name === "black-bishop"&&
           <div id={cellData.stoneData.id} style={{backgroundImage: `url(${cellData.stoneData.src})`}} className="chessPiece"></div>
        }
        {
            cellData.stoneData.name === "black-queen"&&
           <div id={cellData.stoneData.id} style={{backgroundImage: `url(${cellData.stoneData.src})`}} className="chessPiece"></div>
        }
        {
            cellData.stoneData.name === "black-king"&&
           <div id={cellData.stoneData.id} style={{backgroundImage: `url(${cellData.stoneData.src})`}} className="chessPiece"></div>
        }
    {
        cellData.positionY === 1 && <span className='positionX'>{cellData.positionX}</span>
    }
    </div>
  )
}

export default Tile