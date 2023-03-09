import React from 'react'
import Tile from "../Tile/Tile"
function Row({rowInfo}) {

  const handleGrab = (e =React.MouseEvent)=>{
    
  }
  return (
    <div onMouseDown={e => handleGrab(e)}>
    {
        rowInfo.map((cellData,index)=>(
            <Tile key={index} cellData={cellData}/>
        ))
    }
    </div>
  )
}

export default Row