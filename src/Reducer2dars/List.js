import React from 'react';
import { useContext } from 'react';
import { ReducerContext } from './ReducerContext';

const List = () => {
    const {data2,input,setInput,datasend,deletefuncc}=useContext(ReducerContext)
    const send=(e)=>{
        e.preventDefault()
        datasend({
            id:new Date().getTime(),
            name:input
        })
    }
    const deleted =(id)=>{
        deletefuncc(id)
    }
    return (
        <div>
            <form onSubmit={send}>
                <input type="text" placeholder='name' value={input} onChange={(e)=>setInput(e.target.value)}/>
                <button type='submit'>send</button>
            </form>
            <div className="cards">
                {
                    data2.map((val)=>(
                        <div className="card" key={val.id}>
                            <h1>{val.name}</h1>
                            <button className='btn' onClick={()=>deleted(val.id)}>delete</button>
                        </div>
                    ))  
                }
            </div>
        </div>
    );
};

export default List;