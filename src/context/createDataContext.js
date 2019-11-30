// generic function to create Contexts
import React, { useReducer } from 'react';

export default (reducer, actions, initialState) => {
  const Context = React.createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // actions  === object {} with key of a function  that gets called with dispatch and returns a function that does something ( change state)- remember action objects AO
    // addBlogPost : (dispatch) => { return () => { change state stuff}}
    // loop through actions and call every key
    const boundActions = {}; // actions called with dispatch
    for (let key in actions) {
      // key === 'addBlogPost' example,  boundActions[key] === bouncActions.addBlogPost
      boundActions[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};
