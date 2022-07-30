import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios'

const Post = () => {
    const [input, setInput] = useState({
        title: '',
        body: '',
        id: null
    })
    const [datas, setDatas] = useState([])
    const [post, setPost] = useState(null)
    useEffect(() => {
        axios.post("https://jsonplaceholder.typicode.com/posts")
            .then(res => setPost(res))
            .catch(err => console.error(err))
    }, [])

    function Createpost() {
       
            axios.post("https://jsonplaceholder.typicode.com/posts", {
                datas
            })
                .then(res => setPost(res.data.datas))
       
    }
    if (!post) {
        return <h1>Loading text.........</h1>
    }

    const send = (e) => {
        e.preventDefault()
        setDatas([...datas, { ...input, id: new Date().getTime() }])
        setInput({
            title: '',
            body: '',
            id: null
        })

    }
    const inputfun = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    console.log(post);
    return (
        <div>

            <form onSubmit={send}>
                <input type="text" name='title' onChange={inputfun} value={input.title} />
                <input type="text" name='body' onChange={inputfun} value={input.body} />
                <button onClick={Createpost} type='submit'>respost</button>
            </form>

            {
                post.length > 1 ?
                    post.map((val,i) => (
                        <div className="card" key={val.id}>
                            <h4> {i} ({val.id})</h4>
                            <h1>{val.title}</h1>
                            <h4>{val.body}</h4>
                            <hr />  
                        </div>
                    )) : <>
                        <h1>{post.title}</h1>
                        <h1>{post.body}</h1>
                    </>

            }

        </div>
    );
};

export default Post;