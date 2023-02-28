import React, { useEffect, useState } from 'react'
import "./code.css"
import {useSelector, useDispatch} from "react-redux"
import {fetchCodeQuotes} from "../../redux/quotesSlice"
import Footer from "../Footer"
function Code() {
    const [active,setActive] = useState("false")
    const [minLength,setMaxLength] = useState();
     const dispatch  = useDispatch();

    const codeData = useSelector((state) => state.quotes.codeData)

    const handleClick = () =>{
        if(active === "false" ){
            setActive("true")
        }else if(active === "true"){
            setActive("false")
        }
    }
    const handleMaxLength= (value)=>{
     
        setTimeout(()=> setMaxLength(Number(value)) ,1500)
    }
   
    const handleSubmit = ()=>{
          
                dispatch(fetchCodeQuotes(minLength))
           
    }

    useEffect(()=>{
        handleSubmit()
        console.log(codeData)
    },[minLength])
   
  return (
    <div>
        
        <div className='Heading'>Code Quote Generator</div>
        <form >
        <div className='inputs'>

         

             <div className="form__group field">
            <input placeholder="Max Length" className="form__field" type="number" onChange={(e) => handleMaxLength(e.target.value)} />
            <label className="form__label" htmlFor='Max Length"'>Min Length</label>
                </div>
                   <div className={active === "true" ? "active":"text" } >Html</div>
                <label className="switch" >
                        <input type="checkbox" className="switch_input" onClick={handleClick}/>
                        <span className="slider"></span>
                </label>

        
        </div>
        </form>

        <div className="Card">
        <div className="Tools">
            <div className="Circle">
            <span className="Red Box"></span>
            </div>
            <div className="Circle">
            <span className="Yellow Box"></span>
            </div>
            <div className="Circle">
            <span className="Green Box"></span>
            </div>
        </div>
        <div className="Card__content" >
            {
                active === "true" && 
              <p style={{color: "#4e4"}}>
                {`<p>${codeData.content}</p>`}
                <br />
                {`<p> -${codeData.author} </p>`}
             </p>
            }
            {
                active === "false" && 
               <p>
                {`${codeData.content}`}
                <br />
                {`-${codeData.author}`}
                </p>
            }
        </div>
        </div>
        <Footer/>
    </div>
    
  )
}

export default Code