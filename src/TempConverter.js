import React, { Component } from "react";


class TempConverter extends Component {
    constructor(props) {
        super(props);


        this.state = {
            input: ""
        }

        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(e) {
        this.setState({ input: e.currentTarget.value });
    }


    render() {
    const { input } = this.state;

    let celsius = input;
    let fahrenheit = celsius > 0 ? Math.floor(celsius * 9/5 + 32) : null;



        return (
            
            <>
            <div style={{textAlign: "center"}}>
                <label htmlFor="celsius">Celsius</label>
                <input 
                placeholder="Enter Celsius"
                name="celsius"
                className="form-control"
                value={ celsius }
                onChange={this.handleChange} />

                <label htmlFor="fahrenheit">Fahrenheit</label>
                <input 
                placeholder="Enter Fahrenheit"
                name="fahrenheit"
                className="form-control"
                value={ fahrenheit }
                onChange={this.handleChange} />

                
            </div>
            
            </>
        );
    }
}

export default TempConverter;
