import React, { useState } from "react";

const ToggleTextHook = ({ initial, alternate }) => {

    const [clicked, setClicked] = useState(true);

    const update = () => setClicked(!clicked);


    return(
        <div style={{textAlign: "center", margin: 50,}}>
        
        <h2>Toggle Text Hook</h2>
            <button class="btn btn-warning" onClick={ update }>
            Toggle
            </button>

            <h3 style={{color: "orange"}}>
            {clicked ? initial : alternate } 
            </h3>
        </div>
    );
}

export default ToggleTextHook;