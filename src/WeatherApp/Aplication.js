import React from 'react';
import { useState } from 'react';
import { FeatWeatherfun } from './Api/FeathWeather';

const Aplication = () => {
    
    const [query,setQuery]=useState('')
    const [weather,setWeather]=useState({})
   
    const search = async (e)=>{
        if(e.key === 'Enter'){
              const data = await FeatWeatherfun(query)
              setWeather(data)
              setQuery()
              console.log(data);
        }
    }
    return (
        <div className='aplication'>
            <div>
                <input type="text" value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="search..." className="search" onKeyPress={search} />
            </div>
        </div>
    );
};

export default Aplication;