import React, { useReducer } from 'react';

const initialState = {
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

const ClickedReducer = () => {
   const [state, dispatch] = useReducer(reducer, initialState);

   const handleClick = () => {
     dispatch({ type: 'CLICKED' })
   }

  return (
    <div style={{textAlign: "center", margin: 50,}}>
      <h2 onClick={ handleClick }>
      {state.clicked ? "Clicked??" : "Not Clicked"} 
      </h2>
    </div>

  )
}

export default ClickedReducer;


// 2.6 test what happens when you manually update your state
// 3.3 in the handler, dispatch an action  type: 'EXAMPLE' 
// 4.1 in the reducer, accept state and action as parameters
// 4.2 create a switch statement and switch over the action.type
// 4.3 create cases for all the possible action types
// 4.4 create a default that just returns state
// 4.5 in each case, return an object that copies state and updates some value based on whatever





















