import React, { Component } from "react";

class StepCounter extends Component {
    constructor(props) {
    super(props);

    // Starts the original state at 0;
    this.state = {
        counter: 0
    }

    this.handleMinus = this.handleMinus.bind(this);
    this.handlePlus = this.handlePlus.bind(this);

    }

    handlePlus() {
        const current = this.state.counter // adding the state set above (0) to var current
        let { step } = this.props; //adding step props from stuff page to var { step }
        let { max } = this.props; //adding max props from stuff page to var { max }
        let newCounter = current === +max ? +max : current + +step; //adding the answer of this ternary to var newCounter

        this.setState({
            counter: newCounter //Updating the current state to the result of newCounter
        })
    }

    handleMinus() {
        const current = this.state.counter // adding the state set above (0) to var current
        let { step } = this.props; //adding step props from stuff page to var { step }
        const newCounter = current === 0 ? 0 : current - +step; //adding the answer of this ternary to var newCounter

        this.setState({
            counter: newCounter //Updating the current state to the result of newCounter
        })
    }


    render() {
    
    
        return(
            <>
             <div style={{
                textAlign: "center"
            }}>
                <button onClick={this.handleMinus}>-</button>
                <button onClick={this.handlePlus}>+</button>

                <p>{ this.state.counter }</p> 
            </div>
            </>  
        );
    }
}

export default StepCounter;



