// import React, { Component } from "react";

class RollCall extends Component {
    constructor(props) {
        super(props);

        this.state = {
            index: 0
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let currentIndex = 
    }


    render () {

        return (
            <>
            <div style={{textAlign: "center"}}>
                <button>
                    Next
                </button>

                <p>
                { currentIndex }
                </p>
            </div>

            </>
        )
    }
}

// export default RollCall;
