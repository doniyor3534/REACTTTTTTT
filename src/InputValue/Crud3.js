import React, { useState } from 'react';

const Crud3 = () => {
    const [data,setData]=useState([])
    const [input,setInput]=useState({
        name:'',
        password:'',
        email:'',
        country:'',
        id:null
    })
    const inputfun=(e)=>{
        setInput({...input,[e.target.name]:e.target.value})
    }
    const send=(e)=>{
        e.preventDefault()
        setData([...data,{...input,id: new Date().getTime()}])
        console.log(input);
        setInput({
            name:'',
            password:'',
            email:'',
            country:'',
            id:null
        })
    }
    const dalete=(id)=>{
        setData(data.filter((val)=>val.id !== id))
    }
    return (
        <div className='app'>
             <h1>form</h1>
             <form  className='form' onSubmit={send}>
                 <input type="text" className='input' name='name' placeholder='name...' value={input.name} onChange={inputfun}/>
                 <input type="password" className='input' name='password' placeholder='password...' value={input.password} onChange={inputfun}/>
                 <input type="email" className='input' name='email' placeholder='email...' value={input.email} onChange={inputfun}/>
                 <input type="text" className='input' name='country' placeholder='country...'  value={input.country} onChange={inputfun}/>
                 <button className='btn' >send</button>
             </form>
             <table>
                 <thead>
                     <tr>
                         <th>id</th>
                         <th>name</th>
                         <th>password</th>
                         <th>email</th>
                         <th>country</th>
                         <th>Edit</th>
                         <th>Dalete</th>
                         <th>Showw</th>
                     </tr>
                 </thead>
                 <tbody>
                     {
                         data.map((val,i)=>(
                            <tr key={val.id}>
                                <th>{i +1}</th>
                                <td>{val.name}</td>
                                <td>{val.password}</td>
                                <td>{val.email}</td>
                                <td>{val.country}</td>
                                <td><button className='btn edit' onClick={()=>edit(val)}>Edit</button></td>
                                <td><button className='btn dalete' onClick={()=>dalete(val.id)}>Dalete</button></td>
                                <td><button className='btn show'>Showw</button></td>
                            </tr>
                         ))
                     }
                 </tbody>
             </table>
        </div>
    );
};

export default Crud3;