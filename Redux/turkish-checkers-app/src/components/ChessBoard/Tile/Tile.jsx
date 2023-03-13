import {useState,useEffect} from 'react'
import "./Tile.css"
import { moveStone } from '../../../redux/gameSlice'
import {useDispatch, useSelector} from "react-redux"
function Tile({cellData}) {
  const {selectedStone ,movableAreas} = useSelector((state) => state.game)
 const bgColor = cellData.color 
 const [hint,setHint] = useState("")
  
 const dispatch = useDispatch()

  const handleClick = (e)=>{
    if(e.target.classList.contains("chessPiece")){
      dispatch(moveStone(e.target.id))
      console.log(e.target)
    }else{
      console.log(e.target)
    }
  }
  return(
    <div id={cellData.id} onClick={(e)=> handleClick(e)} className={` tile   ${ selectedStone === cellData.id?"active":bgColor} `}>
      {
        movableAreas  &&
       movableAreas.map(
          (id) => id === cellData.id ?( <div className='hint'></div>): ""
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