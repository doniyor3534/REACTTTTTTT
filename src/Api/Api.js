import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Api = () => {
    const [data,setData]=useState('')
    useEffect(()=>{
        axios.get('https://community-open-weather-map.p.rapidapi.com/weather')
            .then(res=>setData(res.data))
            .catch(err=>console.log(err))
    },[])
  
    return (
        <div>
            
        </div>
    );
};

export default Api;