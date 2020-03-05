import React, { Component } from "react";

class ToggleText extends Component { //declaring a class that extends component and called it ToggleText
    constructor(props) {
        super(props);

        this.state = { clicked: true } //this.state is equal to an object with a value of true

        this.handleClick = this.handleClick.bind(this);    

    }

    handleClick() {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        let { clicked } = this.state; //Destructoring the state and assigned it to { clicked }

        return (
            <>
            <button 
            class="btn btn-warning"
            onClick={ this.handleClick }>
            Toggle
            </button>

            <h3 style={{
                color: "orange"
            }}>
            {clicked ? "Hello" : "World"} 
            </h3>
            </>
        );

    }
}

ToggleText.defaultProps = {
    clicked: "World"
};

export default ToggleText;