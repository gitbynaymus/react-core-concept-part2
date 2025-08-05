import { useState } from "react"

export default function TaskCounter(){
    const [count, setCount] = useState(0);
    const addHandler = () =>{
        const updateCount = count + 1;
        setCount(updateCount)
    }
    const subHandler = () =>{
        const updateCount = count - 1;
        setCount(updateCount)
        // alert("hi")
    }
    const resetHandler = () =>{
        const updateCount = 0;
        setCount(updateCount)
    }
    return(
        <div>
            <div className="card">
                <h3>Task Count: {count} </h3>
            </div>
        

            <button className='btn' onClick={addHandler}>+1</button>
            <button className='btn' onClick={subHandler}>-1</button>
            <br />
            <button className='btn' onClick={resetHandler}>Reset</button>
        </div>

    )
}