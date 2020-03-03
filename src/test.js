import React, { Component } from "react";

 class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {counter:0};

        this.handleClick = this.handleClick.bind(this);
     }

    handleClick() {
        let currentCounter = this.state.counter;

        this.setState({ counter: currentCounter + 1});
        console.log(this.state.couter);
     }

    render() {
        const { title } = this.props;
        const { counter } = this.state;

        return (
            <>
                <h1 className="alert alert-primry" onClick={this.handleClick}>
                    {title}
                </h1>
                <h3>{counter}</h3>
            </>
        );
    }
}