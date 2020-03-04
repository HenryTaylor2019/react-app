import React, { Component } from 'react';

class Paragraph extends Component {

    render () {

        let { children } = this.props;

        return (
            <p>{children}</p>
        );
    }

}


Paragraph.defaultProps = {
    children: "Hello, world"
}

export default Paragraph;