import React from 'react';

const Header = ({ children }) => (
   
    <h1>{ children }</h1>
);

Header.defaultProps = {
    children: "H1 Placeholder"
};


export default Header;