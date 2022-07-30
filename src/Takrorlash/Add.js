import React,{useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { DataContext } from './DataContext';


const Add = () => {
    const path =useNavigate()

    const {value,setValue,sendproduct}=useContext(DataContext)
    const inputfun=(e)=>{
        setValue({...value,[e.target.name]:e.target.value})
    }
    const sendproductfun=(e)=>{
        sendproduct(e)
        path('/')
    }
    return (
        <div>
            <h1>Add product </h1>
            <button onClick={()=>path('/')}className='btn'>Back</button>
            <form onSubmit={sendproductfun}>
                <input type="text" name='name' placeholder='name....' value={value.name} onChange={inputfun} />
                <input type="number" name='price' placeholder='price....' value={value.price} onChange={inputfun} />
                <input type="color" name='color' placeholder='color....' value={value.color} onChange={inputfun} style={{width:'50px',height:'50px'}}/>
                <button type='submit' className='btn'>Add</button>
            </form>
        </div>
    );
};

export default Add;