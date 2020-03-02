import React from 'react';

let names = ["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"];

const People = () => (
    <ul className="nameList">

    { names.map((value, index) => (
            <li classname="nameList" key={index}>{value}</li>))}
    </ul>
);

export default People;