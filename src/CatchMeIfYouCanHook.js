import React, { useState } from "react";

const CatchMeIfYouCan = ({ jump }) => {

    const [clicked, setClicked] = useState(0);

    const move = () => setClicked(clicked + jump);

    return (
        <>
        <div style={{textAlign: "center"}}>
            <h2>Jumping Button Hook</h2>

            <button style={{ position: "relative", top: clicked + "px" }} onClick={ move }>
                Jump
            </button>

        </div>
        </>
    );
}



export default CatchMeIfYouCan;