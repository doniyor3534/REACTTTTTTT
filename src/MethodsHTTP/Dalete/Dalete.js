import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Dalete = () => {
    const [update, setUpdate] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                setUpdate(res.data)
                console.log(res.data)
            })
            .catch((err) => console.error(err))
    }, [])
    const deletrequest = (id) => {
        axios.delete('https://jsonplaceholder.typicode.com/posts/1')
        setUpdate(update.filter((val)=>val.id!==id))
        alert('sssssssssssss')
    }
    if (!update) {
        return 'not found'
    }
    return (
        <>
            {
                update.map((val) => (
                    <div>
                        <h1>{val.user}</h1>
                        <h1>{val.title}</h1>
                        <h3>{val.body}</h3>
                        <button onClick={()=>deletrequest(val.id)}>delete</button>
                    </div>
                ))
            }
        </>
    );
};

export default Dalete;