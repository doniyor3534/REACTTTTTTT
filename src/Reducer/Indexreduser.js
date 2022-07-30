import React ,{useReducer,useState} from 'react';
import { initialstate, Reducer } from './Reduser';



const Indexreduser = () => {
    const [state,dispatch]=useReducer(Reducer,initialstate)
    const {data}=state
    console.log(data);
   const [input,setInput]=useState('')
    const send=(e)=>{
        e.preventDefault()
        dispatch({type:'add',payload:{id:new Date().getTime(),name:input}})
    }
    const del=(id)=>{
        dispatch({type:'delete',payload:id})
    }
    return (
        <div>
            <form onSubmit={send} className='form'>
                <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
                <button>Add </button>
            </form>
            <div className="cards">
                {
                   data.map((val)=>(
                    <div className="card" key={val.id}>
                         <h1>{val.name}</h1>
                         <button className='btn delete' onClick={()=>del(val.id)}>delete</button>
                    </div>
                   ))
                }
            </div>
        </div>
    );
};

export default Indexreduser;