import React,{useState} from "react";


function Crud() {
  const [result,setResult]=useState(true)
  const [modal,setModal]=useState(false)
  const [data,setData]=useState([])
   const [input,setInput]=useState({
     name:'',
     password:'',
     email:'',
     country:'',
     id: null
   })
   const sends=(e)=>{
     e.preventDefault();
     if(result){
      setData([...data,{...input,id: new Date().getTime()}])
     }else{
       setData(data.map((val)=>val.id === input.id ? input : val))
       setResult(true)  
       setInput({
        name:'',
        password:'',
        email:'',
        country:'',
        id: null
      })
     }
     setInput({
      name:'',
      password:'',
      email:'',
      country:'',
      id: null
    })
    setResult(true)
    modalopen()
   }
   const inputfun=(e)=>{
     setInput({...input,[e.target.name]:e.target.value})
   }
   const dalete=(id)=>{
     setData(data.filter((val)=>val.id !== id ))
   }
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
  setSHoww(false)
}
const close=()=>{
  modalopen()
  setSHoww(false)
}
const [showw,setSHoww]=useState(false)
const show=(val)=>{
  setSHoww(true)
  modalopen()
  setInput({
    name:val.name,
    password:val.password,
    email:val.email,
    country:val.country,
    id:val.id
  })
  setResult(true)
 console.log(showw);
}
  return (
    <div className='app'>
          <h1>Form</h1>
          <button className="Add" onClick={close} >Add</button>
            <div className={modal ? "modal active":"modal"  }>
               <div className="modalbody">
                 <button className={result  ? "close active":"close"} onClick={modalopen} >x</button>
                    {
                      showw ?
                   
                         <div className="showcard">
                               <h1>name:--{input.name}</h1>
                               <h2>password:--{input.password}</h2>
                               <h2>email:--{input.email}</h2>
                               <h5>country:--{input.country}</h5>
                               <h1>id:--{input.id}</h1>
                         </div>
                
                      :
                           <form className="form" onSubmit={sends}>
                              <input type="text" name="name" placeholder="name" value={input.name} onChange={inputfun}/>
                              <input type="password" name="password" placeholder="password" value={input.password}  onChange={inputfun}/>
                              <input type="email" name="email" placeholder="email" value={input.email}  onChange={inputfun}/>
                              <input type="text" name="country" placeholder="country" value={input.country}  onChange={inputfun}/>
                              <button className="btn">{result ? 'Add' : 'Edit'}</button>
                          </form>
                  
                    }
               </div>
            </div>
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>name</th>
                <th>password</th>
                <th>email</th>
                <th>country</th>
                <th>Dalete</th>
                <th>Edit</th>
                <th>SHoww</th>
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
                    <td><button className="btn dalete " onClick={()=>dalete(val.id)}>Dalete</button></td>
                    <td><button className="btn edit " onClick={()=>edit(val)}>Edit</button></td>
                    <td><button className="btn  show" onClick={()=>show(val)}>SHoww</button></td>
                  </tr>
                 ))
               }
            </tbody>
          </table>
    </div>
  );
  }

export default Crud;