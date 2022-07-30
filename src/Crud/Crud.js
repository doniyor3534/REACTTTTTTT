import React,{useState,useEffect} from 'react';
import axios from 'axios';
import '../App.css'

const Crud = () => {
    const [data,setData]=useState([]);
    const [modal,setModal]=useState(false)
    const [input,setInput]=useState({
        username:'',
        password:'',
        img:'',
        code:''
    })
    const modalopen=()=>{
        setModal(!modal)
    }
    const jsonData=()=>{
        axios({
            url:'https://rasuljon.uz/back-end/crud.php?read_json'
        })
        .then((res)=>{
            console.log(res);
            setData([...res.data])
        })
        .catch((err)=>{
            console.log(err);
           const{code} =err;
           setInput({...input,code:code})
           if(code){
               alert('not yoqqq')
           }
        })
    }
    useEffect(()=>{
        jsonData()
    }, [] );
    const send=(e)=>{
        e.preventDefault();
        console.log(input);
        let formData = new FormData()
        formData.append('status','add_data');
        formData.append('username',input.username);
        formData.append('password',input.password);
        formData.append('img',input.img);
        axios({
            url:'https://rasuljon.uz/back-end/crud.php',
            method:'post',
            data:formData
        })
        .then((res)=>{
            console.log(res.data);
            if(res.status===200){
                jsonData()
                modalopen()
                setInput({
                    username:'',
                    password:'',
                    img:''
                })
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    const inputfun=(e)=>{
        setInput({...input,[e.target.name]:e.target.value})
    }
    const imgUpload=(e)=>{
        setInput({...input,img:e.target.files[0]});
        console.log(e.target.files[0]);
    }
    const daletefun=(id)=>{
        let formData =new FormData();
        formData.append('status','delete_data')
        formData.append('id',id)
        axios({
            url:'https://rasuljon.uz/back-end/crud.php',
            method:'post',
            data:formData
        })
        .then((res)=>{
            console.log(res);
            if(res.status ===200){
                jsonData()
            }
        })
        .catch((err)=>{
            console.log(err);

        })
    }
    return (
        <div>
            <h1>Form</h1>
            <button className='btn' onClick={modalopen}>Add</button>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>username</th>
                        <th>password</th>
                        <th>img</th>
                        <th>active</th>
                    </tr>
                </thead>
                <tbody>
                  {
                      data.map((val,i)=>(
                        <tr key={val.id}>
                            <th>{i +1}</th>
                            <td><img src={val.img} alt="" style={{width:'150px',height:'100px'}} /></td>
                            <td>{val.username}</td>
                            <td>{val.password}</td>
                            <td>
                                <button className='btn'>showw</button>
                                <button className='btn'>edit</button>
                                <button className='btn dalete' onClick={()=>daletefun(val.id)}>dalete</button>
                            </td>
                        </tr>
                      ))
                  }
                </tbody>
            </table>
            <div className={modal ? "modal active" :"modal"}>
                <div className="modalbody">
                    <button className='close ' onClick={modalopen}>x</button>
                    <form className='form' onSubmit={send}>
                        <input type="text" name='username' placeholder='username' value={input.username} onChange={inputfun}/>
                        <input type="password" name='password' placeholder='password' value={input.password} onChange={inputfun}/>
                        <input type="file" name='img' placeholder='' onChange={imgUpload}/>
                        <button className="btn" type='submit'>Add</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Crud;