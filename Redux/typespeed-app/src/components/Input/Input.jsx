import {useEffect,useState, useRef} from 'react'
import "./input.css"
import { useDispatch,useSelector } from 'react-redux'
import Turkey from "../../assets/turkey.png"
import England from "../../assets/united-kingdom.png"
import { 
  setCurrentWord, setKeyTick,
  setInput,setKeyPress,
  
  startGame,
  resetGame,
  stopGame,
  setModalstate,
  changeLanguage,
  resetWords
  } from '../../redux/typespeedSlice'
import {BiRefresh} from "react-icons/bi"
function Input() {
    const {
      selectedLanguage,
      } = useSelector((state) => state.typespeed)
    const [clearInput,setClearInput] = useState(false)
    const [userInput,setUserInput] = useState("")
    const dispatch = useDispatch();
    const [char,setChar] = useState("")
    const[language, setLanguage] = useState("EN")
     

   useEffect(()=>{
    dispatch(setKeyTick(char))
   },[char])

   useEffect(()=>{
    dispatch(changeLanguage(language))
   },[language])

   const handleKeyDown = (event)=>{
    dispatch(startGame())
    setClearInput(false)
    // console.log(event.key)
    // dispatch(setKeyTick(event.key))
    setChar(event.key)
    if(event.key === " "){
      setClearInput(true)
      if(userInput !== " " && userInput !== "" ){
        dispatch(setInput(userInput))
        dispatch(setKeyPress())
      }
    }
   }
   const handleReset = ()=>{
    dispatch(resetWords())
    dispatch(stopGame())
    setClearInput(true)
    setUserInput("")
   }

   const handleChange = (value)=>{
    setUserInput(value)
    dispatch(setKeyTick(value))
   }
  //  useEffect(()=>{
  //   dispatch(setKeyTick(userInput))
  //  },[userInput])
  return (
    <>
    <div className='inputArea'>
        <div className='background-outline'>
        <div className='background'>
        <input
         className='input' 
         placeholder={selectedLanguage==="EN"? "Write here...":"Buraya yaz..."} 
         name="text" onKeyDown={(e)=>handleKeyDown(e)}
         onChange={(e)=> handleChange(e.target.value)} 
         value={clearInput===true?"":userInput}
         />
        </div>
        </div>

        <button onClick={(e)=> handleReset()}>
      <BiRefresh className='refreshButton'/>
      </button>
    </div>
      
    <div className='selectLanguage'>
      <span className='language-text'>{selectedLanguage==="EN"? "Select Language :":"Dil Seç :"}</span>
      <button id="TR" onClick={(e)=>setLanguage("TR")} >
      <img src={Turkey} alt="tr-bayrak" />
      </button>
      <button id="EN" onClick={(e)=>setLanguage("EN")}>
      <img src={England} alt="eng-bayrak" />
      </button>
    </div>
    </>
  )
}

export default Input