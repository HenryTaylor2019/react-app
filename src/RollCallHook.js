import React, { useState } from "react";

const RollCallHook = ({ names }) => {

    const [index, setIndex] = useState(0);

    const click = () => setIndex((index + 1) % names.length)

    return(
        <div style={{textAlign: "center"}}>

            <h2 className="card card-body">{ names[index] }</h2>

            <button className="btn btn-primary" onClick={ click }>Next</button>
            
        </div>
    )
}

export default RollCallHook;