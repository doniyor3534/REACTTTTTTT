import React from "react";
import { useReducer } from "react";
import { initialState } from "./Reduser2/ReducerStores";
import { reducer } from "./Reduser2/ReducerStores";
import { useState } from "react";
import { add2fun,deletefun2 } from "./Reduser2/action/Action";


export const ReducerContext=React.createContext()

export const ReducerContextProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,initialState)
    const {data,data2,inputvalue}=state;
    const [input,setInput]=useState('')
    // const datasend=(data)=>{
    //     dispatch(add(data))
    // }
    const datasend=(data)=>{
        dispatch(add2fun(data))
    }
    // const deletefuncc=(data)=>{
    //     dispatch(deletefun(data))
    // }
    const deletefuncc=(data)=>{
        dispatch(deletefun2(data))
    }
    console.log(state);
    
    
    return(
        <ReducerContext.Provider value={{inputvalue,data,data2,datasend,input,setInput,deletefuncc}}>
            {children}
        </ReducerContext.Provider>
    )
}