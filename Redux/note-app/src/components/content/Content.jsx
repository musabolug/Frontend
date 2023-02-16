import React from 'react'
import Header from './Header'
import Form from './Form'
import NoteList from "./NoteList";
import Footer from './Footer';
function Content() {
  return (
    <div className='content'>
      <Header />
      <Form/>
      <NoteList />
      <Footer />
    </div>
  )
}

export default Content