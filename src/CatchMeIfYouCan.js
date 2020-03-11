import React, { Component } from "react";

class CatchMeIfYouCan extends Component {
    constructor(props) {
        super(props);

        this.state = {
            position: 0
        }

        this.handleClick = this.handleClick.bind(this);

    }

    handleClick() {
        let newPosition = this.state.position;

        this.setState({
            position: newPosition + this.props.jump
        })

    }

    render () {
        let { position } = this.state;

        return (
            <>
            <div style={{textAlign: "center"}}>
                <h2>Jumping Button Class</h2>
                <button 
                style={{marginTop : position,}} 
                onClick={this.handleClick}
                >
                    Jump
                </button>
            </div>
            </>
        );
    }
}

export default CatchMeIfYouCan;
