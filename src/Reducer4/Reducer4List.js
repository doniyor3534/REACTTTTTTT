import React, { useReducer } from 'react';
import { useState } from 'react';
import { InitiState, reduser } from './Reducer4Status';
import { Type } from './Reducer4Type';


const add=(val)=>{
    return{
        type:Type.add,
        payload:val
    }
}
const edit=(val)=>{
    return{
        type:Type.edit,
        payload:val
    }
}
const dalete=(id)=>{
    return{
        type:Type.delete,
        payload:id
    }
}
const add2=(val)=>{
    return{
        type:Type.add2,
        payload:val
    }
}
const edit2=(val)=>{
    return{
        type:Type.edit2,
        payload:val
    }
}
const dalete2=(id)=>{
    return{
        type:Type.delete2,
        payload:id
    }
}

const Reducer4List = () => {

    const [result,setrResult]=useState(true)
    const [input,setInput]=useState({
        id:null,
        name:''
    })
    const [state,dispatch]=useReducer(reduser,InitiState)
    const send=(e)=>{
        e.preventDefault()
        if(result){
            dispatch(add({...input,id: new Date().getTime()}))
        }
        else{
            dispatch(edit(input))
            setrResult(true)
        }
        setInput({
            id:null,
            name:''
        })
    }
    const inputfun=(e)=>{
        setInput({...input,[e.target.name]:e.target.value})
    }
    const editfun=(val)=>{
        setInput(val)
        setrResult(false)
    }


    const [result2,setrResult2]=useState(true)
    const [input2,setInput2]=useState({
        id:null,
        name:''
    })
    const send2=(e)=>{
        e.preventDefault()
        if(result2){
            dispatch(add2({...input2,id:new Date().getTime()}))
        }
        else{
            dispatch(edit2(input2))
            setrResult2(true)
        }
        setInput2({
            id:null,
            name:''
        })
    }
    const inputfun2=(e)=>{
        setInput2({...input2,[e.target.name]:e.target.value})
    }
    const editfun2=(val)=>{
        setInput2(val)
        setrResult2(false)
    }
    return (
        <>
        <form onSubmit={send}>
            <input type="text" name='name' value={input.name} onChange={inputfun} />
            <button className='btn' type='submit'>submit</button>
        </form>
        {
            state.data.map((val)=>(
                <div className="card" key={val.id}>
                     <h1>{val.name}</h1>
                     <button className='btn' onClick={()=>editfun(val)}>edit</button>
                     <button className='btn' onClick={()=>dispatch(dalete(val.id))}>delete</button>
                </div>
            ))
        }
        <form onSubmit={send2}>
            <input type="text" name='name' value={input2.name} onChange={inputfun2} />
            <button className='btn' type='submit'>submit</button>
        </form>
        {
            state.data2.map((val)=>(
                <div className="card" key={val.id}>
                     <h1>{val.name}</h1>
                     <button className='btn' onClick={()=>editfun2(val)}>edit</button>
                     <button className='btn' onClick={()=>dispatch(dalete2(val.id))}>delete</button>
                </div>
            ))
        }
    </>
    );
};

export default Reducer4List;