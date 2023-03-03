import {useEffect,useState, useRef} from 'react'
import "./input.css"
import { useDispatch,useSelector } from 'react-redux'
import { setCurrentWord } from '../../redux/typespeedSlice'

function Input() {
    const {words, selectedLanguage, wordIndex, language,tickstatus} = useSelector((state) => state.typespeed)
    const [number,setNumber] = useState(0)
    const [someWords,setSomeWords] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)

    const dispatch = useDispatch();
    
    useEffect(()=>{
        if (wordIndex % 20 === 0){
            setNumber(wordIndex)
            setCurrentIndex(wordIndex)
        }
        setSomeWords(words.slice(number,20+ number))
    },[words,number])

   
  return (
    <>
    <div className='inputArea'>
        <div className='background-outline'>
        <div className='background'>
        <input className='input' placeholder="Write here..." name="text" />
        </div>
        </div>
    </div>
    <div className='selectLanguage'>
      
    </div>
    </>
  )
}

export default Input