import React, { Component }  from 'react';
import {createContext, useContext,useReducer} from "react" ;

//prepare the data layer
export const StateContext = createContext();


//Wrap our app provide the data layer
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState )}>
        {children}
    </StateContext.Provider>
    );

    //pull information fromm data layer
export const useStateValue = () => useContext(StateContext);