import React, { Component } from 'react';

class People extends Component {

    handleClick() {
        console.log("Hello, world"); }


    render () {
        let { names } = this.props

        return (
            names ?
            <ul className="nameList" onClick={ this.handleClick }>
        
                { names.map((value, index) => (
                    <li className="nameList" class="list-group-item" key={index}>
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


// const People = ({ names }) => (
//     names ?
//     <ul className="nameList">
        
//         { names.map((value, index) => (
//             <li classname="nameList" key={index}>
//                 {value}
//             </li>
//         ))}
//     </ul>

//     : "Nothing to see here"
//     // This is a ternary..... 
// );


