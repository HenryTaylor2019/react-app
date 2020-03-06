import React, { Component }  from 'react';

class Header extends Component {
 
    render() {

        let { children } = this.props;

        return (
            <header style={{
                textAlign: "center",
                paddingBottom: 20,
            }}> 
                <h1 className="display-1">{children}</h1>
            </header>
        );
    }
}


export default Header;