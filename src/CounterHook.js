import React, { useState } from "react";

const CounterHook = ({ initial, max }) => {

    const [clicked, setClicked] = useState(initial);

    const clickedMinus = () => setClicked(clicked === 0 ? 0 : clicked -1);

    const clickedPlus = () => setClicked(clicked === max ? max : clicked +1);

    return (
        <>
        <div style={{
            textAlign: "center"
        }}>
            <h2>Counter Hook</h2>
            <button onClick={clickedMinus}
            style={{
                textAlign: "center"
            }}>-</button>

            <button onClick={clickedPlus}
            style={{
                textAlign: "center"
            }}>+</button>

            <p >{ clicked }</p>
        </div>
        </>
    );
}


export default CounterHook;

