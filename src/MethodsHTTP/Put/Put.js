import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Put = () => {
    const [updated,setUpdated]=useState([])
    useEffect(()=>{
         axios.put("https://reqres.in/api/articles/1")
            .then((res)=>{
                    console.log(res)
                     setUpdated(res.data)
            })
            .catch(err=>console.error(err))
            
    },[])
    console.log(updated);
    return (
        <div className='card'>
             <div className="header">
                Put Request
             </div>
             <div className="body">
                Returned request date: {updated.updatedAt}
             </div>
        </div>
    );
};

export default Put;
