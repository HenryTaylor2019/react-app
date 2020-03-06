import React, { Component } from "react";

class Length extends Component {
    constructor(props) {
        super(props);

        this.state = { input: "" };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ input: e.currentTarget.value });
    }
    

    render() {
        let { input } = this.state;
        
        return(
            <>
            <div style={{textAlign: "center"}}>
                <h2>Length Detector</h2>
                <input 
                className="form-control"
                value={input} 
                onChange={this.handleChange}/>

                <p> Length: { this.state.input.length } characters </p>
                </div>
            </>
        );
    }
}

export default Length;
