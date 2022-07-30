import React,{useContext, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { DataContext } from './DataContext';


const Edit = () => {
    const path = useNavigate()
    const {id}=useParams()
    const {value,setValue,sendproduct,data}=useContext(DataContext)
    console.log(data.filter((val)=>val.id ===+ id));
    useEffect(()=>{
         setValue(data.filter((val)=>val.id ===+ id )[0]) ;
    },[])
    const inputfun=(e)=>{
        setValue({...value,[e.target.name]:e.target.value})
    }
    const sendproductfun=(e)=>{
        sendproduct(e)
        path('/')
    }

    return (
        <div>
            <h1>Edit product</h1>
            <button onClick={()=>path('/')}className='btn'>Back</button>
            <form onSubmit={sendproductfun}>
                  <input type="text" name='name' placeholder='name....' value={value.name} onChange={inputfun} />
                <input type="number" name='price' placeholder='price....' value={value.price} onChange={inputfun} />
                <input type="color" name='color' placeholder='color....' value={value.color} onChange={inputfun} style={{width:'50px',height:'50px'}}/>
                <button type='submit'className='btn'>Add</button>
            </form>
        </div>
    );
};

export default Edit;