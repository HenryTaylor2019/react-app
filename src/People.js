import React from 'react';


const People = ({ names }) => (
    names ?
    <ul className="nameList">
        
        { names.map((value, index) => (
            <li classname="nameList" key={index}>
                {value}
            </li>
        ))}
    </ul>

    : "Nothing to see here"
    // This is a ternary..... 
);


export default People;