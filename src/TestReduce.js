import React, { useReducer } from 'react';

const initialState = {
  clicked: false
  // 2.3 create an initial state with the values you want to track
};
const reducer = (state, action) => {
// 2.2 create a reducer function that takes state and action as parameters
  // a function named reducer
  // state = 
  // action = what we passed into dispatch
  switch (action.type) {
      // switch tests a value against many possibilities
      case 'CLICKED':
      // case 'CLICKED' matches the dispatch type: 'CLICKED'
          return {
              ...state,
              // return a copy of the state so the original doesn't get affected
              clicked: !state.clicked,
          }   // the copied state reverts to the opposite of state.clicked, in this case, true
      default: return state;
      // 
  };
}
const SquareReducer = () => {
// display a component named SquareReducer
  const [state, dispatch] = useReducer(reducer, initialState);
  // 2.1 create state and dispatch using useReducer
  // state = a variable that represents how we read the values we're storing
  // dispatch = how we trigger an update to the state values
  // 2.4 pass the reducer and initialState to the useReducer function call
  // reducer = instructions on how to update the state
  // initialState = what the state looks like to begin with
  const handleClick = () => {
  // 3.2 create a handler for the event listener
      dispatch({ type: 'CLICKED' })
      // when we click on the square, it runs a dispatch action, in this instance, the user clicked, so we want the reducer to respond with its 'CLICKED' task
  }
  const divStyle = {
      backgroundColor: state.clicked ? "green" : "hotpink",
      // 2.5 base the HTML on the state
      width: "200px",
      height: "200px"
  };
  return <div onClick={ handleClick } style={ divStyle } />
  // 1. Display JSX
  // 3.1 add event listener to your JSX - onclick={ handleClick } 
}
export default SquareReducer;
// 2.6 test what happens when you manually update your state
// 3.3 in the handler, dispatch an action { type: 'EXAMPLE' }
// 4.1 in the reducer, accept state and action as parameters
// 4.2 create a switch statement and switch over the action.type
// 4.3 create cases for all the possible action types
// 4.4 create a default that just returns state
// 4.5 in each case, return an object that copies state and updates some value based on whatever


// 1. import react and implement the useReducer hook
const initialState = {
    clicked: false
    // 7. create an initial state with the values you want to track
};
const reducer = (state, action) => {
// 6. create a reducer function that takes state and action as parameters
// state = the current state
// action = what we passed into dispatch
    switch (action.type) {
    // 13. create a switch statement and switch over the action.type
    // switch tests a value against many possibilities
        case 'CLICKED':
        // 14. create cases for all the possible action types
        // case 'CLICKED' matches the action type: 'CLICKED'
            return {
                ...state,
                // 16. in each case, return an object that copies state (so the original doesn't get affected) and updates some value based on whatever
                clicked: !state.clicked,
            }   // the copied state reverts to the opposite of state.clicked, in this case, true
        default: return state;
        // 15. create a default that just returns state unchanged, this is a necessity as a state needs to be returned
    };
}
const SquareReducer = () => {
// 4. display a component named SquareReducer
    const [state, dispatch] = useReducer(reducer, initialState);
    // 5. create state and dispatch using useReducer
    // state = a variable that represents how we read the values we're storing
    // dispatch = calls the reducer so we can trigger an update to the state values
    // 8. pass the reducer and initialState to the useReducer function call
    // reducer = instructions on how to update the state
    // initialState = what the state looks like to begin with
    const handleClick = () => {
    // 11. create a handler for the event listener
        dispatch({ type: 'CLICKED' })
        // 12. in the handler, dispatch an action { type: 'EXAMPLE' }
        // when we click on the square, it runs a dispatch action, in this instance, the user clicked, so we want the reducer to respond with its 'CLICKED' task
    }
    const divStyle = {
    // 9. base the HTML on the state
        backgroundColor: state.clicked ? "green" : "hotpink",
        width: "200px",
        height: "200px"
    };
    return <div onClick={ handleClick } style={ divStyle } />
    // 3. Display JSX by returning something
    // 10. add event listener to your JSX - onclick={ handleClick } 
}
export default SquareReducer;
// 2. export default 'name of file'





















