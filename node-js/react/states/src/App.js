import { useState } from "react";
import CounterUnmount from "./components/CounterUnmount";
function App() {
  const [isVisible,setIsVisible] = useState(true);
 return(
  <div className='App'>
   {isVisible &&  <CounterUnmount />}

    <br></br>

    <button onClick={()=> setIsVisible(!isVisible)}>Toggle Counter</button>
    
 </div>
 );
}

export default App;
