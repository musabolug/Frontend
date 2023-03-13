import React, { useState } from 'react'
import Tile from "../Tile/Tile"


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