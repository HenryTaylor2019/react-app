import React, { useState } from "react";

const SquareHook = ({ colour }) => {
    const [green, changeColour] = useState(false);

    const update = () => changeColour(!green);

    const backgroundColour = green ? "green" : colour;

    const square = {
        height: 500,
        width: 500,
        background: backgroundColour,
    }
    
    return(
        <div className="nav justify-content-center">
            <div style={square} onClick={ update } />
        </div>
    
    );

}

export default SquareHook;
