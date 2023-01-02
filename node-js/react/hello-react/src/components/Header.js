import { memo } from "react"
import React  from 'react'

function Header(data) {
    console.log("Header componennt re-rendered")
  return (
    <div>Header
        <br/>
        <br/>
    <code>{JSON.stringify(data)}</code>
    </div> 
  )
}

export default React.memo(Header)   