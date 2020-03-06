import React, { Component }  from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: this.props.initial
        }

        this.handleMinus = this.handleMinus.bind(this);
        this.handlePlus = this.handlePlus.bind(this);
        

    }

    handlePlus() {
        const current = this.state.counter 
        const { max } = this.props;
        const newCounter = current === max ? max : current + 1;

        this.setState({
            counter: newCounter
        })
    }

    handleMinus() {
        const current = this.state.counter 
        const newCounter = current === 0 ? 0 : current - 1;

        this.setState({
            counter: newCounter
        })
    }

    render() {


        return (
            <>
            <div style={{
                textAlign: "center"
            }}>
                <button onClick={this.handleMinus}
                style={{
                    textAlign: "center"
                }}>-</button>

                <button onClick={this.handlePlus}
                style={{
                    textAlign: "center"
                }}>+</button>

                <p >{ this.state.counter }</p>
            </div>
            </>
        );
    }
}

// Counter.defaultProps = {
//     button1: "+",
//     button2: "_"
// }


export default Counter;

//  1. Render HTML on Page
//  2. Track data in state and use state to update display
//  2a. Source data in state from props or elseware 
//  3. Add interactivity so that state is updated when the user does something
//  3a. Add event listeners to elements and test they run
//  3b. Update the state 