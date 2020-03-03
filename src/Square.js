import React from 'react';

const Square = ({ color }) => (
   
    <div style={ {
        backgroundColor: color, 
        width: 200, 
        height: 200
    }}> 
    
    </div>
);

Square.defaultProps = {
    color: 'blue'
}

export default Square;