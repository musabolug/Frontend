import {useEffect, useState} from 'react'
import "./words.css"
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentWord } from '../../redux/typespeedSlice'
function Words() {
const {words,currentWord, selectedLanguage} = useSelector((state) => state.typespeed)

  return (

    <div className='wordArea'>
         <div className='background-outline-words'>
        <div className='background-words'>
           
        </div>
        </div>
    </div>
  )
}

export default Words