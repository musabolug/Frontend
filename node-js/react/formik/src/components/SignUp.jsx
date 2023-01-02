import React from 'react'
import { /*Formik,*/useFormik } from 'formik';
import validationSchema from './validations';
function SignUp() {
    const {handleSubmit,values,handleChange,handleBlur, errors, touched}  = useFormik({
        initialValues: {
          // firstName:"Musab",
          // lastName:"Oluğ",
          email:"",
          password:"",
          passwordConfirm:"", 
          // gender:"male",
          // hobbies:[],
          // country:"Türkiye",
    
        },
        onSubmit:values=> {
         console.log(values);  
         },
         validationSchema,
        });
      return (
       <div className="App">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
        {/*  <Formik ></Formik>
         initialValues={{
        //   firstName:"Musab",
        //   lastName:"Oluğ",
        //   email:"musabolug@gmail.com",
        //   gender:"male",
        //   hobbies:[],
        //   country:"Türkiye",
        //  }}
        //  onSubmit={(values) => {
        //   console.log(values);  
        //  }}
         // >*/}
          
            {/* ({ handleSubmit, handleChange, values}) => ( */}
            {/**          <form  onSubmit={handleSubmit}>
               <label htmlFor='firstName'>First Name</label>
               <input name='firstName'value={values.firstName} onChange={handleChange}/>
               <br/>
               <br/>
               <label htmlFor='lastName'>Last Name</label>
               <input name='lastName'value={values.lastName} onChange={handleChange}/>
    
               <br/>
               <br/> */}

               <label >Email</label>
               <input name='email' values={values.email} onChange={handleChange} onBlur={handleBlur}/>
               {errors.email &&  touched.email &&<div className='error'>{errors.email }</div>}
               <br/>
               <br/>
               <label >password</label>
               <input name='password' values={values.password} onChange={handleChange} onBlur={handleBlur}/>
               {errors.password&& touched.password && <div className='error'>{errors.password }</div>}
               <br/>    
               <br/>
               <label >Confirm password</label>
               <input name='passwordConfirm' values={values.passwordConfirm} onChange={handleChange} onBlur={handleBlur}/>
               {errors.passwordConfirm && touched.passwordConfirm && <div className='error'>{errors.passwordConfirm }</div>}
               <br/>
               <br/>
    
                {/**<span>Male</span>
               <input 
               type="radio" 
               name='gender' 
               alue="male"
               onChange={handleChange}
               checked={values.gender ==="male"}
                />
                <span>Female</span>
               <input type="radio" name='gender' value="female" onChange={handleChange}/>
    
               <br/>
               <br/>
               <div>      
               <input type="checkbox" name='hobies' value="Fitness" onChange={handleChange}/>
                <span>Fitness</span>
               </div>
                <div>  
               <input type="checkbox" name='hobies' value="Guitar" onChange={handleChange}/>
               <span>Guitar</span>
               </div>
                <div>
               <input type="checkbox" name='hobies' value="Photography" onChange={handleChange}/>
                <span>Photography</span>
                </div>
    
     */}
               <br/>
               <br/>
              {/* //TODO use this on list project to select line number on a page
              //? <select name='country' value={values.country} onChange={handleChange}>
              //?   <option value="türkiye">Türkiye</option>
               //?  <option value="england">England</option>
              //?  <option value="usa">USA</option>
              //  </select>
              <br/>
               <br/> */}
    
               <button type='submit'>Submit</button>
               <br/>
               <br/>
    
              <code>{JSON.stringify(values)}</code>
              </form>
    {/** </Formik> */}
        </div>
      );
}

export default SignUp