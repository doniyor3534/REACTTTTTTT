import React,{useContext} from "react";
import '../App.css'
import { DataContext } from "./DataContext";

const ContextPage1 =()=>{
    const {data}=useContext(DataContext)
    return(
        <>
         <h1>{data.name}</h1>
         <h1>{data.age}</h1>
        </>
    )
}
export default ContextPage1 ;