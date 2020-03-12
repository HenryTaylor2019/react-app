import React, { useReducer } from 'react';

// Set initial state
const initialState = {
    counter: 0,
}

// reducer gives the intial state and an action(object literal). The action can be passed a switch  
const reducer = (state, action) => {
    
    // switch cases are required to assign what we want the action to do. We can call the type later in our handle functions
    switch (action.type) {
        case 'PLUS':

        return {
            ...state,
            counter: (state.counter === 100 ? 100 : state.counter + 1 )
        }

        case 'MINUS':

        return {
            ...state,
            counter: (state.counter === 0 ? 0 : state.counter - 1 )
        }

        default: return state;
    }

}

const CounterReducer = () => {
    // create state and dispatch using useReducer
    // state = a variable that represents how we read the values we're storing
    // dispatch = how we trigger an update to the state values
    const [state, dispatch] = useReducer(reducer, initialState);


    const handlePlus = () => {
        dispatch({ type: 'PLUS'})
    // dispatch seems pretty similar to setState we used in classes
    }

    const handleMinus = () => {
        dispatch({ type: 'MINUS'})

    }


    return (
        <div style={{ textAlign: "center" }}>

            <h2>Counter Reducer</h2>

            <button 
            onClick={ handleMinus }
            style={{ textAlign: "center" }}>-</button>

            <button 
            onClick={ handlePlus }
            style={{ textAlign: "center" }}>+</button>

            <p>{ state.counter }</p>
        </div>
    )

}

export default CounterReducer;
