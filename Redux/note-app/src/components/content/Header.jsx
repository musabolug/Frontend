import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import { findNote } from '../../redux/note/noteSlice'
function Header() {
  const dispatch = useDispatch();
  const search = useSelector(state => state.notes.search)
  return (
    <div >
          <h1 className='header'>Notes App</h1>
        <input type="search" className='search' value={search} onChange={(e) => dispatch(findNote(e.target.value))} placeholder="Search Notes"/>
    </div>
  )
}

export default Header