import React, { useState } from 'react';

const Crud4 = () => {
    const [data, setData] = useState(JSON.parse(localStorage.getItem('data')) || [])
    const [add, setAdd] = useState(true)
    const [input, setInput] = useState({
        id: '',
        name: '',
        age: ''
    })
    const localsave = () => {
        setData(JSON.parse(localStorage.getItem('data')) || [])
    }
    const send = (e) => {
        e.preventDefault()
        if (add) {
            localStorage.setItem('data', JSON.stringify([...data, { ...input, id: new Date().getTime() }]))
            localsave()
            setInput({
                id: '',
                name: '',
                age: ''
            })
        } else {
            localStorage.setItem('data', JSON.stringify(data.map((val) => val.id === input.id ? input : val)))
            localsave()
            setInput({
                id: '',
                name: '',
                age: ''
            })
            setAdd(false)
        }
        console.log(data);
    }
    const inputfun = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    const editfun = (val) => {
        setInput({
            id: val.id,
            name: val.name,
            age: val.age
        })
        setAdd(false)
    }
    const deletefun = (id) => {
        localStorage.setItem('data', JSON.stringify(data.filter((val) => val.id !== id)))
    }
    return (
        <div>
            <form onSubmit={send}>
                <input type="text" name='name' placeholder='name' onChange={inputfun} value={input.name} />
                <input type="text" name='age' placeholder='age' onChange={inputfun} value={input.age} />
                <button type='submit' className='btn'>Add</button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>age</th>
                        <th>active</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((val, i) => (
                            <tr key={val.id}>
                                <th>{i + 1}</th>
                                <td>{val.name}</td>
                                <td>{val.age}</td>
                                <td>
                                    <button onClick={() => editfun(val)}>edit</button>
                                    <button onClick={() => deletefun(val.id)}>delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Crud4;