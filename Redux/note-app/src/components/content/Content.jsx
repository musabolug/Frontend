import React from 'react'
import Header from './Header'
import Form from './Form'
import NoteList from "./NoteList";
function Content() {
  return (
    <div className='content'>
      <Header />
      <Form/>
      <NoteList />
    </div>
  )
}

export default Content