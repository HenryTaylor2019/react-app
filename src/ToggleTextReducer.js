import React, { useReducer } from 'react';

const initialState = {
    clicked: false,
}

const reducer = (state, action) => {

    switch(action.type) {
        case 'CLICKED':

        return {
            ...state,
            clicked: !state.clicked,
        }
        default: return state;
    }
}

const ToggleTextHook = ({ initial, alternate}) => {

    const handleClick = () => {
        dispatch({ type: 'CLICKED' })
    }

    const [state, dispatch] = useReducer(reducer, initialState);
 
    return (
        <div style={{textAlign: "center", margin: 50,}}>
        
        <h2 style={{color: "red"}}>Toggle Text Reducer</h2>
            <button class="btn btn-warning" onClick={ handleClick }>
            Toggle Text
            </button>

            <h3 style={{color: "orange"}}>
            {state.clicked ? initial : alternate }
            </h3>
        </div>
    );
}

export default ToggleTextHook;
