import React, { useState } from 'react';
import { useEffect } from 'react';

const Useeffectfun = () => {
    const [count,setCount]=useState(0)
    useEffect(()=>{
        setTimeout(() => {
            setCount((count)=>count +1)
        }, 1000);
    })
    return (
        <div className='useeffect'>
            <h1>Vaqtingiz  <h1>{count}</h1> </h1>
        </div>
    );
};

export default Useeffectfun;