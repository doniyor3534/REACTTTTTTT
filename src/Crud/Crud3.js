import React, { useState } from 'react';

const Crud3 = () => {
    const [data, setData] = useState(JSON.parse(localStorage.getItem('data')) || [])
    const [input, setInput] = useState({
        id: '',
        name: '',
        age: ''
    })
    const locSave = () => {
        setData(JSON.parse(localStorage.getItem('data')) ||[ ])
    }
    const inputFun = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    const send = (e) => {
        e.preventDefault()
        if (Add) {
            localStorage.setItem('data', JSON.stringify([...data, { ...input, id: new Date().getTime() }]))
            locSave()
            console.log(data);
            setInput({
                id: '',
                name: '',
                age: ''
            })
        } else {
            localStorage.setItem('data', JSON.stringify(data.map((vals) => vals.id === input.id ? input : vals)))
            locSave()
            setInput({
                id: '',
                name: '',
                age: ''
            })
            setEdits(true)
        }

    }
    const [Add, setEdits] = useState(true)
    const editFun = (val) => {
        setInput({
            id: val.id,
            name: val.name,
            age: val.age
        })
        setEdits(false)
    }
    const deletfun = (id) => {
        localStorage.setItem('data', JSON.stringify(data.filter((vals) => vals.id !== id)))
        locSave()
    }
    return (
        <div>
            <form onSubmit={send}>
                <input type="text" placeholder='name' value={input.name} name='name' onChange={inputFun} />
                <input type="number" placeholder='age' value={input.age} name='age' onChange={inputFun} />
                <button type='submit'>Add</button>
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
                                    <button onClick={() => editFun(val)}>edit</button>
                                    <button onClick={() => deletfun(val.id)} >delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Crud3;