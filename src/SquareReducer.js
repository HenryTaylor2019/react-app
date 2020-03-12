import React, { useReducer } from 'react';

const initial = {
    clicked: false,
};

const reducer = (state, action) => {

    switch(action.type) {
        case 'CLICKED':

        return {
            ...state,
            clicked: !state.clicked,
        }
        default: return state;
    };
}

const SquareReducer = () => {
    const [state, dispatch] = useReducer(reducer, initial);

    const handleClick = () => {
        dispatch({ type: 'CLICKED' })
    }

    const style = {
        width: 200,
        height: 200,
        backgroundColor: state.clicked ? 'pink' : 'red',
    }

    return (
        <div style={ style } onClick={ handleClick }>

        </div>
    )
}

export default SquareReducer;