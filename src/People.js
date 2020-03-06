import React, { Component } from 'react';

class People extends Component {

    handleClick() {
        console.log("Hello, world"); }


    render () {
        let { names } = this.props

        return (
            
            names ?
            <ul class="list-group list-group-flush" 
                onClick={ this.handleClick }
                style={{
                    textAlign: "center"
                }}>    
        
                { names.map((value, index) => (
                    <li class="list-group-item" key={index}>
                        {value}
                    </li>
                ))}
            </ul>

            : "Nothing to see here"
            // This is a ternary..... 
        )
    }
}

export default People;





