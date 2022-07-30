import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Localstoreg = () => {
    const [data,setData]=useState([])
    const [input,setInput]=useState({
        name:'',
        id:null
    })
    const inputfun=(e)=>{
        setInput({...input,[e.target.name]:e.target.value})
    }
    const send=(e)=>{
        e.preventDefault() 
        setData([...data,{...input,id:new Date().getTime()}]) 
        localStorage.setItem('data',JSON.stringify(data))
    }
 
 
     const datas = JSON.parse(localStorage.getItem('data'))
   
    console.log(datas);
    return (
        <div>
            <form onSubmit={send}>
                <input type="text"  placeholder='text' name='name' value={input.name} onChange={inputfun} />
                <button type='submit'>send</button>
            </form>
            {
                datas.map((val)=>(
                    <div className="card" key={val.id }>
                         <h1>{val.name}</h1>
                         <h1>{val.id}</h1>
                    </div>
                ))
            }
        </div>
    );
};

export default Localstoreg;