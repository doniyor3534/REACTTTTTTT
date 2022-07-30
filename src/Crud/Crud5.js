 import React, { useState } from 'react';
 
 const Crud5 = () => {
     const [data,setData]=useState(JSON.parse(localStorage.getItem('data')) || [])
     const [input,setInput]=useState({
         name:'',
         id:''
     })
     const localsave=()=>{
         setData(JSON.parse(localStorage.getItem('data')) || [])
     }
     const inputfun=(e)=>{
         setInput({...input,[e.target.name]:e.target.value})
     }
     const send=(e)=>{
         e.preventDefault()
         localStorage.setItem('data',JSON.stringify([...data,{...input,id:new Date().getTime()}]))
         localsave()
         setInput({
            name:'',
            id:''
         })

         
     }
     console.log(data.slice(5,10));
     return (
         <div>
             <form onSubmit={send}>
                 <input type="text" name='name' value={input.name} onChange={inputfun}/>
                 <button type='submit'>Add</button>
             </form>
         </div>
     );
 };
 
 export default Crud5;