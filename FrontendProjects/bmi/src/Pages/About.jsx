import React from 'react'
import Table from 'react-bootstrap/Table';

function About() {
  return (
    <div className='About'>
        <h2>What is the body mass index (BMI)?</h2>
  
        <br />
        <img className='imgA' src="https://github.com/musabolug/Frontend/blob/master/FrontendProjects/bmi/public/bmi-adult-fb-600x315.jpg?raw=true" alt="" />
    
       <div className='text'>

        <br />
        <p className='span2'>The body mass index (BMI) is a measure that uses your height and weight to work out if your weight is healthy.</p>
        <p className='span2'>The BMI calculation divides an adult's weight in kilograms by their height in metres squared. For example, A BMI of 25 means 25kg/m2.</p>
       </div>
      <h3>BMI ranges</h3>
      <p> For most adults, an ideal BMI is in the 18.5 to 24.9 range.
          For children and young people aged 2 to 18, the BMI calculation takes into account age and gender as well as height and weight.
          If your BMI is:</p>
          <br />
          <Table striped className='table table-success table-striped'>
      <thead>
        <tr>
          <th colSpan={2}>BMI</th>
          <th colSpan={2} >WEIGHT STATUS</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colSpan={2}>Below 18.5</td>
          <td colSpan={2}>Underweight</td>
        </tr>
        <tr>
          <td colSpan={2} >18.5 – 24.9</td>
          <td colSpan={2} >Healthy Weight</td>
        </tr>
        <tr>
          <td colSpan={2}>25.0 – 29.9</td>
          <td colSpan={2}>Overweight</td>
        </tr>
        <tr>
          <td colSpan={2}>30.0 and Above</td>
          <td colSpan={2}>Obesity</td>
        </tr>
      </tbody>
    </Table>
    <br />
    </div>
  )
}

export default About