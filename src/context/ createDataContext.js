// generic function to create Contexts
import React, {useReducer} from 'react';

export default (reducer, actions, initialState) => {
   
    const Context  = React.createContext();

    const Provider = ({}) => {
        const [state, dispatch] = useReducer(reducer, initialState);
        return (
            <Context.Provider value={{state}}>
                {children}
            </Context.Provider>
        )
    }
   
    return {Context, Provider}
  
}