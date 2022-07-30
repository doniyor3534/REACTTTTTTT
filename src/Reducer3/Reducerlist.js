import React, { useState } from 'react';
import { useReducer } from 'react';

const Type = {
    incr: 'increment',
    decr: 'decrement',
    add: 'add',
    deletet: 'delete',
    edit: 'edit'
}

const InitiState = {
    count: 0,
    data: []
}
export const add = (data) => {
    return {
        type: Type.add,
        payload: data
    }
}
export const delet = (id) => {
    return {
        type: Type.deletet,
        payload: id
    }
}
export const edit = (val) => {
    return {
        type: Type.edit,
        payload: val
    }
}


const reducer = (state, { type, payload }) => {
    switch (type) {
        case Type.incr:
            return { ...state, count: state.count + 1 }
        case Type.decr:
            return { ...state, count: state.count > 0 ? state.count - 1 : state.count = 0 }
        case Type.add:
            return {
                ...state,
                data: [...state.data, payload]
            }
        case Type.deletet:
            return {
                ...state,
                data: state.data.filter((val) => val.id !== payload)
            }
        case Type.edit:
            return {
                ...state,
                data: state.data.map((val) => val.id === payload.id ? payload : val)
            }
        default:
            return state
    }

}

const Reducerlist = () => {

    const [result, setResult] = useState(true)
    const [input, setInput] = useState({
        name: '',
        id: null
    })
    const [state, dispatch] = useReducer(reducer, InitiState)
    const send = (e) => {
        e.preventDefault()
        if (result) {
            dispatch(add({ ...input, id: new Date().getTime() }))
        } else {
            dispatch(edit(input))
            setResult(true)
        }
        setInput({
            name: '',
            id: null
        })
        console.log(input);
    }
    const changeFun = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    const editFun = (val) => {
        setInput(val)
        setResult(false)
    }
    return (
        <div >
            <h1>{state.count}</h1>
            <button className='btn' onClick={() => dispatch({ type: Type.incr })}>Incr +</button>
            <button className='btn' onClick={() => dispatch({ type: Type.decr })}>Decr -</button>
            <form onSubmit={send}>
                <input type="text" onChange={changeFun} name='name' value={input.name} />
                <button type='submit' className='btn'>add</button>
            </form>
            {
                state.data.map((val) => (
                    <div key={val.id} className='card'>
                        <h1>{val.name}</h1>
                        <button className='btn' onClick={() => editFun(val)}>edit</button>
                        <button className='btn' onClick={() => dispatch(delet(val.id))}>delete</button>
                    </div>
                ))
            }
        </div>
    );
};

export default Reducerlist;