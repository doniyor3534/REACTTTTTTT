import React, { useState } from 'react';
import { useReducer } from 'react';

const Type={
    add:'add',
    edit:'edit',
    delete:'delete'
}

const InitiState={
    data:[]
}
const add=(val)=>{
    return{
        type:Type.add,
        payload:val
    }
}
    const edit =(val)=>{
        return{
            type:Type.edit,
            payload:val
        }
    }

const delet =(id)=>{
    return{
        type:Type.delete,
        payload:id
    }
}

const reducer=(state,{type,payload})=>{
       switch (type) {
        case Type.add:
            return{
               ...state,
               data:[...state.data,payload]
            }
        case Type.edit:
            return{
                ...state,
                data: state.data.map((val)=>val.id===payload.id? payload : val)
            } 
        case Type.delete:
            return{
                ...state,
                data:state.data.filter((val)=>val.id!== payload )
            }

        default:
         return   state ;
       }
}


const ReducerList2 = () => {

const [result ,setResult]=useState(true)
const [input,setInput]=useState({
    id:null,
    name:''
})
const[state,dispatch]=useReducer(reducer,InitiState)
const send=(e)=>{
    e.preventDefault()
    if(result){
        dispatch(add({...input,id:new Date().getTime()}))
    }
    else{
        dispatch(edit(input))
        setResult(true)
    }
    setInput({
        id:null,
        name:''
    })
    console.log(state.data);
}
const inputfun=(e)=>{
    setInput({...input,[e.target.name]:e.target.value})
}
const editfun=(val)=>{
   setInput(val)
    setResult(false)
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
                         <button className='btn' onClick={()=>dispatch(delet(val.id))}>delete</button>
                    </div>
                ))
            }
        </>
    );
};

export default ReducerList2;