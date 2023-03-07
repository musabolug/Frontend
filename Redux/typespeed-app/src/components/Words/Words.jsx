import {useEffect, useState} from 'react'
import "./words.css"
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentWord,setInput,setKeyPress, } from '../../redux/typespeedSlice'
function Words() {
const {words,currentWord, selectedLanguage,tickstatus,wordIndex,language} = useSelector((state) => state.typespeed)

const [someWords,setSomeWords] = useState([])
const [currentIndex,setCurrentIndex] = useState(0)
const [number,setNumber] = useState(0)
const dispatch = useDispatch()

 useEffect(()=>{
  if(selectedLanguage==="EN"){

    if(wordIndex % 5 === 0){
      setNumber(wordIndex)
      setCurrentIndex(wordIndex)
    }
    setSomeWords(words.slice(number,5+number))
  }else{
    if(wordIndex % 4 === 0){
      setNumber(wordIndex)
      setCurrentIndex(wordIndex)
    }
    setSomeWords(words.slice(number,4+number))

  }
 },[words,number])

 useEffect(()=>{
  if(selectedLanguage==="EN"){
    
    let currentId = wordIndex;
    currentId === 5 ? (currentId = 0) : (currentId = wordIndex % 5);
    dispatch(
      setCurrentWord(
        selectedLanguage === language[0] 
        ? someWords[currentId]?.turkish
        : someWords[currentId]?.english
      )
    )
  }else{

    let currentId = wordIndex;
    currentId === 4 ? (currentId = 0) : (currentId = wordIndex % 4);
    dispatch(
      setCurrentWord(
        selectedLanguage === language[0] 
        ? someWords[currentId]?.turkish
        : someWords[currentId]?.english
      )
    )
  }
 },[wordIndex,dispatch,selectedLanguage,language,someWords])

  return (

    <div className='wordArea'>
         <div className='background-outline-words'>
        <div className='background-words'>
      <p className='words'>
        {
          someWords.map((word,index)=>{
            return(
              <span key={index} className={`textWords 
              ${wordIndex === currentIndex+ index 
              ? tickstatus === true 
                ? "redbg" :"greybg" 
                : word.status === "correct" 
                  ? "text-green" 
                  : word.status==="wrong"
                    ? "text-red"
                    : "" }`} >
                {selectedLanguage === language[0] ? word.turkish : word.english}
              </span>
            )
          })
        }
        </p>
        </div>
        </div>
    </div>
  )
}

export default Words