import React from 'react'
import "./Tile.css"

function Tile({number}) {
    if(number % 2 === 0 ){
        return <div className='tile black-tile'> <img src="../../assets/black-pawn" alt="" /> </div>
    }
    else{
        return <div className='tile white-tile'></div>
        
    }
 
}

export default Tile