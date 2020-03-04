import React, { Component } from "react";

class Square extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            green: true, 
        };
        
        this.handleClick = this.handleClick.bind(this);
    }   

    handleClick() {
       this.setState({ 
           green: !this.state.green, 
        })
    }

    render () {
        let greenOrPink = this.state.green ? "green" : this.props.color;

        return (
            <div
                onClick={ this.handleClick }
                style={{
                    height: 200,
                    width: 200,
                    background: greenOrPink,
                }}
            />
        );
    }
}

Square.defaultProps = {
    color: 'hotpink'
};
   


export default Square;


// const Square = ({ color }) => (
   
//     <div style={ {
//         backgroundColor: color, 
//         width: 200, 
//         height: 200
//     }}> 
    
//     </div>
// );

// Square.defaultProps = {
//     color: 'blue'
// }