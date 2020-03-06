import React, { Component } from "react";

class PasswordStrength extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input : ""
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ input: e.currentTarget.value });
    }

    render() {
        const { input } = this.state;
        let strength;

        let style = {}; //an empty object to store the result of the if/else statements below

        if (input.length === 0) {
            style.backgroundColor = 'transparent';

        } else if (input.length < 9) {
            style.backgroundColor = 'red';
            strength = 'not very good';
        } else if (input.length < 16) {
            style.backgroundColor = 'orange';
            strength = 'less bad';
        } else {
            style.backgroundColor = 'green';
            strength = 'aiiite';
        }

        return(
            <>
            <div style={{textAlign: "center"}}>
                <label>Password Strength</label>
                <input
                placeholder="Gimmie your password"
                className="form-control"
                value={input}
                onChange={this.handleChange} 
                style={ style }
                type="password"
                />
                <p>Strength: { strength }</p>
            </div>

            </>
        );
    }
}

export default PasswordStrength;
