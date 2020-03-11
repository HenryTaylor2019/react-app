import React, { Component } from "react";

class RollCall extends Component {
    constructor(props) {
        super(props);

        this.state = {
            index: 0
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let { names } = this.props;

        this.setState({
            index: (this.state.index + 1) % names.length,
        });
    }

    render() {
        let { index } = this.state;
        let { names } = this.props;

        return (
            <React.Fragment>
                <div style={{textAlign: "center"}}>
                    <h2 className="card card-body">{ names[index] }</h2>
                    <button className="btn btn-primary" onClick={ this.handleClick }>Next</button>
                </div>
            </React.Fragment>
        );
    }
}

export default RollCall;
