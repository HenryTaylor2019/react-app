import React, { Component } from "react";

class Square extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            green: false, 
        };
        
        this.handleClick = this.handleClick.bind(this);
    }   

    handleClick() {
       this.setState({ 
           green: !this.state.green, 
        })
    }

    render () {
        let greenOrPink = this.state.green ? "green" : this.props.square;

        return (
            <>
                <div className="nav justify-content-center">
                
                    
                    <div
                    class="card"
                    onClick={ this.handleClick }
                    style={{
                            height: 500,
                            width: 500,
                            background: greenOrPink,
                        
                        }}
                    />

                </div>
                
            </>
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