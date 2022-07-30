import React, { useState } from "react";

export const  DataContext = React.createContext();

const DataContextProvider=({children})=>{
    const [value,setValue]=useState({
        id:null,
        name:'',
        price:null,
        color:''
    })
    const [data,setData]=useState(JSON.parse(localStorage.getItem('data')) || [])
    const localsave=()=>{
        setData(JSON.parse(localStorage.getItem('data')) || [])
    }
    // add
    const sendproduct=(e)=>{
         e.preventDefault();
         if(value.id !== null){
             localStorage.setItem('data',JSON.stringify(data.map((val)=>{
                 return val.id === value.id ? value : val
             })))
             localsave()
             setValue({
                id:null,
                name:'',
                price:null,
                color:''
             })
             console.log(value);
         }else{
             if(localStorage.getItem('data')){
                 localStorage.setItem('data',JSON.stringify([...data,{...value,id:new Date().getTime()}]))
                 localsave()
             }else{
                 localStorage.setItem('data',JSON.stringify([{...value,id:new Date().getTime()}]))
                 localsave()
             }
             localsave()
             setValue({
                id:null,
                name:'',
                price:null,
                color:''
             })
         }
    }

    // dalete
    const daleteproduct=(id)=>{
        setData(data=>data.filter((val)=>val.id !== id ))
        console.log(id);
        console.log(data);
    }
    return(
        <DataContext.Provider value={{value,setValue,data,setData,daleteproduct,sendproduct}}>
            {children}
        </DataContext.Provider> 
    )
}

export default DataContextProvider ;