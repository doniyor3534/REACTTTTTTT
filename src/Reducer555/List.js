import React from 'react';
import { useReducer } from 'react';
import { useState } from 'react';
import { add } from './Func';
import { initialstate, Reducerrr } from './State';

const List = () => {
    const {state,dispatch}=useReducer(Reducerrr,initialstate)

    const [input,setInput]=useState({
        id:null,
        name:""
    })
    const inputfun=(e)=>{
        setInput({...input,[e.target.name]:e.target.value})
    }
    const send =(e)=>{
        e.preventDefault();
        dispatch(add({...input,id:new Date().getTime()}))
        setInput({
            id:null,
            name:""
        })
        console.log('djjjjj');
    }
    console.log(state);
    return (
        <div>
            <form onSubmit={send}>
                <input type="text" 
                  name='name'
                  value={input.name}
                  onChange={inputfun}
                />
                <button type='submit'>send</button>
            </form>
            {/* {
                state.data.length > 1?
                state.data.map((val)=>(
                    <div className="card" key={val.id}>
                          <h1>{val.name}</h1>
                          <h1>{val.id}</h1>
                          <button>edit</button>
                          <button>delete</button>
                    </div>
                ))
                :'hdjhsjsjsjsjsjsjsj'
            } */}
        </div>
    );
};

export default List;