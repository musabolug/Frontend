import {useState} from 'react'
import { Button } from '@mui/material'
import { nanoid } from '@reduxjs/toolkit'
import { addNote, changeColor } from '../../redux/note/noteSlice'
import {useDispatch} from "react-redux"

function Form() {
  const [color,setColor] = useState("indigo");
  const [title,setTitle]= useState("");
  const [note,setNote] = useState("")
  const dispatch = useDispatch();

  const handleSubmit = (e) =>  {
    e.preventDefault();
    if (title ==="" || note ==="") return;

    dispatch(addNote({
      id: nanoid(),
      title:title,
      color:color,
      note:note,
    }));

  setTitle("");
  setNote("");
  }
  return (
    <form className="form">
    <input type="search" className='title ' placeholder='Note Title' style={{backgroundColor:`${color}`}} onChange={(e) => setTitle(e.target.value)}value={title}/>
    <Button variant="contained" color='secondary' onClick={handleSubmit} >Add</Button>
    <textarea type="text"  className='note'  placeholder='Enter Your Notes'style={{backgroundColor:`${color}`}}onChange={(e) => setNote(e.target.value)} value={note}/>

    <div className='color-div'>
        <button id="midnightblue" className='color'  onClick={(e) =>setColor(e.target.id)} style={{backgroundColor: "midnightblue"}} type="button"></button>
        <button id="indigo" className='color'  onClick={(e) => setColor(e.target.id)} style={{backgroundColor: "indigo"}} type="button"></button>
        <button id="blueviolet" className='color'  onClick={(e) =>setColor(e.target.id)} style={{backgroundColor: "blueviolet"}} type="button"></button>
        <button id="darkmagenta" className='color'  onClick={(e) =>setColor(e.target.id)} style={{backgroundColor: "darkmagenta"}} type="button"></button>
        <button id="yellowgreen" className='color'  onClick={(e) =>setColor(e.target.id)} style={{backgroundColor: "yellowgreen"}} type="button"></button>
        <br />
      
        <span style={{backgroundColor: `${color}`, color: "white"}}>Note Color:{color}</span>

    </div>
    </form>
  )
}

export default Form