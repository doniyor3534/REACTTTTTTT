import React from 'react';
import { useState } from 'react';
import { useReducer } from 'react';
import { initialstate2, Reduser2 } from './Reduser2';

const IndexReduser2 = () => {
    const [state,dispatch]=useReducer(Reduser2,initialstate2)
    const {data2}= state ;
    const [input,setInput]=useState('')
    const send=(e)=>{
        e.preventDefault()
        dispatch({type:'add',payload:{id:new Date().getTime(),name:input}})
        setInput('')
    }
    const del=(id)=>{
        dispatch({type:'delete',payload:id})
    }
    return (
        <div className='reducer'>
            <form onSubmit={send}>
                <input type="text"  value={input} onChange={(e)=>setInput(e.target.value)}/>
                <button type='submit' className='btnadd'>Add</button>
            </form>
            <div className="cards">
                {
                    data2.map((val)=>(
                        <div className="card" key={val.id}>
                            <h1>{val.name}</h1>
                            <button className='btn' onClick={()=>del(val.id)}>delete</button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default IndexReduser2;