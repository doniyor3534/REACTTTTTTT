import React ,{useState,useEffect} from 'react';
import axios from 'axios';


const Crud2 = () => {
    const [data,setData]=useState([])
    const [modal,setModal]=useState(false)
    const [input,setInput]=useState({
        username:'',
        password:'',
        img:''
    })
    const jsondata=()=>{
        axios({
            url:'https://rasuljon.uz/back-end/crud.php?read_json',
        })
        .then((res)=>{
            console.log(res);
            setData([...res.data])
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    useEffect(()=>{
        jsondata()
    },[])
   
    const modalopen=()=>{
        setModal(!modal)
        setInput({
            username:'',
            password:'',
            img:'',
            id:''
        })  
        setShow({})
    }
    const send=(e)=>{
        e.preventDefault();
        modalopen()
        let formData = new FormData();
        formData.append('username',input.username)
        formData.append('password',input.password)
        formData.append('img',input.img);
        if(input.id !== ''){
            formData.append('status','update_data')
            formData.append('id',input.id)
        }else{
            formData.append('status','add_data')
        }
        axios({
            url:'https://rasuljon.uz/back-end/crud.php',
            method:'post',
            data:formData
        })
        .then((res)=>{
            console.log(res);
            console.log(input);
            jsondata()
            setInput({
                username:'',
                password:'',
                img:'',
                id:''
            })
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    const inputfun=(e)=>{
        setInput({...input,[e.target.name]:e.target.value})
       console.log(input.img);
    }
   const imgUpload=(e)=>{
       setInput({...input,img:e.target.files[0]})
   }

   const deletefun=(id)=>{
       let formData = new FormData()
       formData.append('status','delete_data')
       formData.append('id',id)
       axios({
            url:'https://rasuljon.uz/back-end/crud.php',
            method:'post',
            data:formData
       })
       .then((res)=>{
           jsondata()
       })
       .catch((err)=>{
           console.log(err);
       })
   }
   const edifun=(val)=>{
       modalopen()
       setInput({
            username:val.username,
            password:val.password,
            img:val.img,
            id:val.id
       })
   }
   const [show,setShow]=useState({})
const showfun=(val)=>{
    modalopen()
   setShow(val)
}
    return (
        <div>
            <button className="btn" onClick={modalopen}>Add</button>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>password</th>
                        <th>username</th>
                        <th>img</th>
                        <th>active</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((val,i)=>(
                            <tr key={val.id}>
                                <th>{i +1}</th>
                                <td>{val.username}</td>
                                <td>{val.password}</td>
                                <td><img src={val.img} alt="" style={{width:'150px',height:'100px'}} /></td>
                                <td>
                                    <button className="btn" onClick={()=>showfun(val)}>show</button>
                                    <button className="btn" onClick={()=>edifun(val)}>edit</button>
                                    <button className="btn" onClick={()=>deletefun(val.id)}>dalete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div className={modal ? "modal active" :"modal"}>
                <div className="modalbody">
                    <button className="close" onClick={modalopen}>x</button>
                    {
                        show.username  ?
                        <>    
                                <h1>{show.username}</h1>
                                <p>{show.password}</p>
                                <img src={show.img} alt="" style={{width:'200px',height:'200px'}}/>
                         </>
                    :  <form className='form' onSubmit={send}>
                        <input type="text"  name='username' value={input.username} onChange={inputfun}/>
                        <input type="password"  name='password' value={input.password} onChange={inputfun}/>
                        <input type="file"  name='img'  onChange={imgUpload}/>
                        {
                            input.img === '' ? '':<img src={input.img} alt="" />
                        }
                        <button className="btn">{input.id ?'Edit':'Add'}</button>
                    </form>
                    }
                </div>
            </div>
        </div>
    );
};

export default Crud2;