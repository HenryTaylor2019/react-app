import React, { Component } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'


class Progress extends Component {
    constructor(props){
        super(props);

        this.state = {
            now: 0
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const clicked = this.state.now;
        let more = clicked <= 100 ? clicked + 10 : clicked - 110;

        this.setState({
            now: more
        })
    }


    render () {
     

        return (
            <>
            <div style={{textAlign: "center"}}>
                <button onClick={ this.handleClick }>
                    More!
                </button>
                <ProgressBar now={this.state.now} />
            </div>
          
            </>
        );
        
    
    }



}

export default Progress;