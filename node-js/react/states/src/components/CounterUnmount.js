import {useEffect, useState} from "react";

function CounterUnmount() {
    const [number,setNumber] =useState(0);

    useEffect(()=>{
     console.log("Component mount edildi!");

     const interval = setInterval(()=>{  
      setNumber((n)=> n+1);
     },1000);

     return ()=> console.log("Component unmount edildi!");  
     return ()=> clearInterval(interval);
    }, []); 

    
    useEffect(()=>{
     console.log("Number State Güncellendi");
    }, [number]);
 

   return(
    <div >
      <h1>{number}</h1>
      <button onClick={() => setNumber(number +1 )}>Click</button>
      <hr />
  
  
   </div>
   );
}

export default CounterUnmount