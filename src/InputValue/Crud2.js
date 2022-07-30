
import React, { useState } from 'react';

const Crud2 = () => {
    const [value,setValue]=useState(false)
    const [showw,setShoww]=useState(true)
    const [close,setClose]=useState(true)
    const [result,setResult]=useState(true)
    const [data,setData]=useState([])
    const [input,setInput]=useState({
        name:'',
        password:'',
        email:'',
        country:'',
        id:null
    })
const sedns=(e)=>{
    e.preventDefault();
   if(value){
    if(result){
        setData([...data,{...input,id: new Date().getTime()}])
    }else{
        setData(data.map((val)=>val.id === input.id ? input : val))
        setResult(false)
        setInput({
            name:'',
            password:'',
            email:'',
            country:'',
            id:null 
        })  
    }
    console.log(input);
    console.log(data);
    setInput({
        name:'',
        password:'',
        email:'',
        country:'',
        id:null 
    })
    modalopen()
    setResult(true)
   }else{

   }
   valuee()
}
const inputfun=(e)=>{
    setInput({...input,[e.target.name]:e.target.value})
    valuee()
}
const dalete=(id)=>{
    setData(data.filter((val)=> val.id !== id ))
}
const [modal,setModal]=useState(false)
const modalopen=()=>{
    setModal(!modal)
}
const edit=(val)=>{
    modalopen()
    setInput({
        name:val.name,
        password:val.password,
        email:val.email,
        country:val.country,
        id:val.id 
    })
    setResult(false)
    setClose(false)
}
const add=()=>{
    modalopen()
    setClose(true)
    setValue(false)
}
const closeopen=()=>{
    modalopen()
    setShoww(true)
}
const show=(val)=>{
    modalopen()
    setInput({
        name:val.name,
        password:val.password,
        email:val.email,
        country:val.country,
        id:val.id 
    })
    setShoww(false)
}
function valuee(){
    if(input.name !== '' && input.password !== '' && input.email !== '' && input.country !== ''){
       setValue(true)
        console.log('true');
    }
    else{
        setValue(false)
        console.log('false');
    }
}

    return (
        <div className='app'>
            <h1>form</h1>
            <button className="Add" onClick={add}>Add</button>
               <div className={modal ? "modal active":"modal"}>
                   <div className="modalbody">
                       <button className={close ?"close active":"close"} onClick={closeopen}>x</button>
                       {
                           showw ?
                           <form className='form' onSubmit={sedns}>
                                <input type="text " name='name' placeholder='name' className={input.name !== ''? 'input active':'input'} value={input.name} onChange={inputfun}/>
                                <input type="password" name='password' placeholder='password' className={input.password !== ''? 'input active':'input'} value={input.password} onChange={inputfun} />
                                <input type="email " name='email' placeholder='email' className={input.email !== ''? 'input active':'input'}  value={input.email} onChange={inputfun}/>
                                <input type="text " name='country' placeholder='country' className={input.country !== ''? 'input active':'input'} value={input.country}  onChange={inputfun}/>
                                {
                                    value ?
                                    <button className='btn'>send</button>
                                    :  <button className='diseblit'>diseblit</button>
                                }
                            </form>
                            :
                            <>
                                <div className="showcard">
                                    <h1>name:--{input.name}</h1>
                                    <h1>password:--{input.password}</h1>
                                    <h1>email:--{input.email}</h1>
                                    <h1>country:--{input.country}</h1>
                                    <h1>id:--{input.id}</h1>
                                </div>
                            </>
                       }
                   </div>
               </div>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>passowrd</th>
                        <th>email</th>
                        <th>country</th>
                        <th>Add</th>
                        <th>Dalete</th>
                        <th>Show</th>
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
                                <td><button className='btn ' onClick={()=>edit(val)}>edit</button></td>
                                <td><button className='btn dalete' onClick={()=>dalete(val.id)}>Dalete</button></td>
                                <td><button className='btn ' onClick={()=>show(val)}>Show</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Crud2;