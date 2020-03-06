import React, { Component } from 'react';

class List extends Component {
    constructor(props){
        super(props);

        this.state = {
            value: "",
            items: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);

    }

    handleChange(e) {
        let value = e.currentTarget.value 

        this.setState({ 
            value: value 
        });
    }

    handleClick(e) {
        e.preventDefault();

        this.setState({
            value: "",
            items: [...this.state.items, this.state.value],
        });
    }

    render() {
        return (
            <React.Fragment>
                <div style={{textAlign: "center"}}>
                    <form onClick={ this.handleClick } className="form-group mt-4">

                        <input 
                        placeholder="Add to List"
                        className="form-control" 
                        onChange={ this.handleChange } 
                        value={ this.state.value } />
                        <button className="btn btn-primary mt-4">Add</button>

                    </form>

                    <ul className="list-group mt-4">

                        { this.state.items.map((item, i) => (
                            <li  key={ i }>{ item }</li>

                        )) }
                    </ul>
                </div>
            </React.Fragment>
        );
    }
}

export default List;
