import React from 'react'
import "./Tile.css"

function Tile({cellData}) {
 const bgColor = cellData.color 
  return(
    <div className={`tile ${bgColor}`}>
        {
            cellData.positionX === "a" && <span className='positionY'>{cellData.positionY}</span>
        }
          {/**White PIECES */}
        {
        cellData.stoneData.name === "white-pawn" &&
        // <img src={cellData.stoneData.src} alt="" />
        <div style={{backgroundImage: `url(${cellData.stoneData.src})`}} className="chessPiece"></div>
        }
          {
            cellData.stoneData.name === "white-rook"&&
           <div style={{backgroundImage: `url(${cellData.stoneData.src})`}} className="chessPiece"></div>
        }
        {
            cellData.stoneData.name === "white-knight"&&
           <div style={{backgroundImage: `url(${cellData.stoneData.src})`}} className="chessPiece"></div>
        }
        {
            cellData.stoneData.name === "white-bishop"&&
           <div style={{backgroundImage: `url(${cellData.stoneData.src})`}} className="chessPiece"></div>
        }
        {
            cellData.stoneData.name === "white-queen"&&
           <div style={{backgroundImage: `url(${cellData.stoneData.src})`}} className="chessPiece"></div>
        }
        {
            cellData.stoneData.name === "white-king"&&
           <div style={{backgroundImage: `url(${cellData.stoneData.src})`}} className="chessPiece"></div>
        }

         {/**BLACK PIECES */}
        {
             cellData.stoneData.name === "black-pawn" &&
            <div style={{backgroundImage: `url(${cellData.stoneData.src})`}} className="chessPiece"></div>
        }
          {
            cellData.stoneData.name === "black-rook"&&
           <div style={{backgroundImage: `url(${cellData.stoneData.src})`}} className="chessPiece"></div>
        }
        {
            cellData.stoneData.name === "black-knight"&&
           <div style={{backgroundImage: `url(${cellData.stoneData.src})`}} className="chessPiece"></div>
        }
        {
            cellData.stoneData.name === "black-bishop"&&
           <div style={{backgroundImage: `url(${cellData.stoneData.src})`}} className="chessPiece"></div>
        }
        {
            cellData.stoneData.name === "black-queen"&&
           <div style={{backgroundImage: `url(${cellData.stoneData.src})`}} className="chessPiece"></div>
        }
        {
            cellData.stoneData.name === "black-king"&&
           <div style={{backgroundImage: `url(${cellData.stoneData.src})`}} className="chessPiece"></div>
        }
    {
        cellData.positionY === 1 && <span className='positionX'>{cellData.positionX}</span>
    }
    </div>
  )
 
}

export default Tile