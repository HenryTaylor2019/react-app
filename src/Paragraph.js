import React, { Component } from 'react';

class Paragraph extends Component {

    render () {

        let { children } = this.props;

        return (
            <div style={{textAlign: "center"}}>
                <p>{children}</p>
            </div>
        );
    }

}


Paragraph.defaultProps = {
    children: "Hello, world"
}

export default Paragraph;