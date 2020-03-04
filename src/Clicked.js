import React, { Component } from 'react';

class Clicked extends Component {

    // Constructor sets up the default functionality for the class
    constructor(props) {
        super(props);

    // State sets the default state of whatever is passed in
    this.state = { isClicked : false }

        this.handleClick = this.handleClick.bind(this);
    }

    // handleClick sets what will happen when item is clicked. 
    handleClick() {
        this.setState({ isClicked : !this.state.isClicked })
    }

    // render includes what will be rendered in the browser as a result of the function
    render () {
        let { isClicked } = this.state;

        return (
                  //   A ternary decides what text to render depending on the action taken 
            <p onClick={ this.handleClick }>
                {isClicked ? "Clicked" : "Not Clicked"} 
            </p>

        );
    }
}

export default Clicked;