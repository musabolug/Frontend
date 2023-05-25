import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { isAccordionItemSelected } from 'react-bootstrap/esm/AccordionContext';
function Main() {
  const [height, setHeight] = useState("0")
  const [weight, setWeigth]= useState("0")
  const [isSubmit, setIsSubmit] = useState(false)
  const [Bmi,setBmi] = useState()

  const handleWeight= event=>{
    setWeigth(event.target.value)
  }
  const handleHeight= event=>{
    setHeight(event.target.value/100)
  }
  const handleSubmit=()=>{
   setIsSubmit(true)
  }
  useEffect(()=>{
    setBmi(weight/(height * height))
    console.log("BMI",Bmi)
  },[Bmi,handleSubmit,height,weight])

  return (
    <>
    {
      isSubmit &&
    
      <div className='TEXT'>
      <div className='BMI'>
      <h2 >Your BMI Score is: {Bmi.toFixed(2)}  </h2> 
      

      {
        Bmi >18.5 && Bmi < 25 &&
        <h2>You Are Healty </h2> 
      }
      {
        Bmi >=25 && Bmi < 30 &&
        <h2>You Are Overweight </h2> 
      }
      {
        Bmi <18.5 &&
        <h2>You Are Underweight </h2> 
      }
      {
        Bmi > 30 &&
        <h2>You Are Obese </h2> 
      }
      </div>
      </div>
    }
    <div className='main'>
      
        <img className='img' src="https://raw.githubusercontent.com/musabolug/Frontend/fbac1d68dfc5479526392ebeeb5aeb07b0eef016/FrontendProjects/bmi/public/Group-3.svg" alt="" />
        <form  action="">
            <input onChange={handleWeight} type="text" className='input-text' placeholder='Your Weight (kg)' /> <br />
            <input onChange={handleHeight} type="text" className='input-text' placeholder='Your Height (cm)' /> <br />
            <div className='text-start'>
            <input  type="radio" className='input-selection mx-2' name="same"  id="" />
            <span  >Male</span>
            <input type="radio" className='input-selection  mx-2'  name="same" id="" />
            <span>Female</span>
            <br />
            </div>
            <Button onClick={handleSubmit} style={{backgroundColor:"#85B09B" , border:"none", width:"400px" ,marginTop:"15px", height:"50px", fontSize:"1.5rem"}} >Calculate</Button>
        </form>

    </div>
    </>
  )
}

export default Main