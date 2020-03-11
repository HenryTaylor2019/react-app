import React, { useState } from "react";

const StepCounterHook = ({ max, step }) => {

    const [count, setCount] = useState(0);

    const clickedMinus = () => setCount(count - (count > 0 ? step : 0));

    const clickedPlus = () => setCount(count + (count < max ? step : 0));


    return(
        <>
        <div style={{
           textAlign: "center"
        }}>
            <h2>Step Counter Hook</h2>
            <button onClick={clickedMinus}>-</button>
            <button onClick={clickedPlus}>+</button>

            <p>{ count }</p> 
       </div>
       </>  

    );
}


export default StepCounterHook;