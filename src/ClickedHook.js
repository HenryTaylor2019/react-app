import React, { useState } from 'react';

const ClickedHook = () => {
    const [clicked, setClicked] = useState(false);

    const update = () => setClicked(true);

    return (
        <div style={{textAlign: "center", margin: 50,}}>
            <h2>Clicked Hook</h2>
            <p onClick={ update }>
                { clicked ? "Clicked" : "Not Clicked" }
            </p>
        </div>
    );
}

export default ClickedHook;