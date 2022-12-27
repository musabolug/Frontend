import {useState} from "react";

function Counter(){
    const [count, setCounter] = useState(0);
    const increse = () => {
        setCounter(count+1);
    }
    const decrese = () => {
        setCounter(count - 1)
    }
    return <div>

        <h1>{count}</h1>
        <button onClick={decrese}>Decrease</button>
        <button onClick={increse}>Increase</button>

    </div>;
}

export default Counter;