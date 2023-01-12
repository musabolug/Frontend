import {useEffect, useState} from 'react'
import Emojies from "../emoji.json"
import "../App.css"
function Emoji() {
        const [text,setText] = useState("");
        const [data,setData] = useState([])
    // const [items,setItems] = useState(Emojies);
    useEffect(() =>{
        const newData = Emojies.filter(emoji => emoji.title.toLowerCase().includes(text.toLowerCase())) 
        setData(newData);
    },[text])
  return (
    <div>   
        <h1 className='App'>Emoji Search</h1>
        <input  style={{marginTop: 10, marginBottom: 20}} value={text} onChange={(e) => setText(e.target.value)} placeholder = "Search" />
        <div className="container">
        {data.map(emoji => <div className='card '><div className="card-body ">{emoji.symbol} {emoji.title}</div></div>)}
        </div>
    </div>
  )
}

export default Emoji



