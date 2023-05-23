import React from 'react'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
function Main() {
  return (
    <div className='main'>

        <img className='img' src="https://raw.githubusercontent.com/musabolug/Frontend/fbac1d68dfc5479526392ebeeb5aeb07b0eef016/FrontendProjects/bmi/public/Group-3.svg" alt="" />
        <form action="">
            <input type="text" className='input-text' placeholder='Your Weight (kg)' /> <br />
            <input type="text" className='input-text' placeholder='Your Height (cm)' /> <br />
            <div className='text-start'>
            <input  type="radio" className='input-selection mx-2' name="same"  id="" />
            <span  >Male</span>
            <input type="radio" className='input-selection  mx-2'  name="same" id="" />
            <span>Female</span>
            <br />
            </div>
            <Button style={{backgroundColor:"#85B09B" , border:"none", width:"300px" ,marginTop:"15px"}} >Calculate</Button>
        </form>
    </div>
  )
}

export default Main