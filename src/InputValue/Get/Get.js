import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Get = () => {
    const [state,setState]=useState([])
    const [state2,setState2]=useState([])
    useEffect(()=>{
         axios.get("https://jsonplaceholder.typicode.com/users")
           .then(res => setState(res.data))
           .catch(err=> console.error('error'))
    },[])
    useEffect(()=>{
         axios.get("https://jsonplaceholder.typicode.com/comments")
         .then(res=> setState2(res.data))
         .catch(err=> console.error(err))
    },[])
   
    return (
        <div>
            {
                state2.map((val)=>(
                    <div className="card" key={val.id}>
                         <h1>{val.name}</h1>
                         <h2>{val.email}</h2>
                         <h2>{val.phone}</h2>
                         <h2>{val.website}</h2>
                         <h2>{val.username}</h2>
                         <h2>{val.body}</h2>
                    </div>
                ))
            }
        </div>
    );
};

export default Get;