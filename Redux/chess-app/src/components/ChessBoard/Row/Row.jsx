import React, { useState } from 'react'
import Tile from "../Tile/Tile"
import { useDispatch } from 'react-redux'
import { moveStone } from '../../../redux/gameSlice'

function Row({rowInfo}) {
  // const [isActive, setIsActive] = useState= ("false")
 

  return (
    <div>
    {
        rowInfo.map((cellData,index)=>(
            <Tile  key={index} cellData={cellData}/>
        ))
    }
    </div>
  )
}

export default Row