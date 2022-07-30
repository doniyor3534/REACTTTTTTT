import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'

const Post2 = () => {
    const [post, setPost] = useState(null)
    const [data, setData] = useState([])
    const [input, setInput] = useState({
        name: '',
        id: null
    })
    useEffect(() => {
        axios.post("https://jsonplaceholder.typicode.com/posts")
            .then(res => setPost(res.data))
            .catch(err => console.error(err))
    }, [])

    function createpost() {
        axios.post("https://jsonplaceholder.typicode.com/posts", {
            data
        })
            .then(res => setPost(res.data.data))

    }
    if (!post) {
        return <h1>Loading text........</h1>
    }


    const send = (e) => {
        e.preventDefault()
        setData([...data, { ...input, id: new Date().getTime() }])
    }
    const inputfun = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    localStorage.setItem('data', JSON.stringify(data))
    const data2 = JSON.parse(localStorage.getItem('data'))
    console.log(data2);
    return (
        <div>
            <form onSubmit={send}>
                <input type="text" name='name' onChange={inputfun} value={input.name} />
                <button type='submit'>send</button>
            </form>
            {
                post.length > 1 ?
                    post.map((val) => (
                        <div className="card" key={val.id}>
                            <h1>{val.name}</h1>
                        </div>
                    )):'hhshshs'
                }
                <button onClick={createpost}>repost</button>
        </div>
    );
};

export default Post2;