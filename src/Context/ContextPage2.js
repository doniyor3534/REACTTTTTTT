import React,{useContext} from "react";
import '../App.css'
import { DataContext } from "./DataContext";

const  ContextPage =()=>{
     const {dark,setDark}=useContext(DataContext)
     const menufun =()=>{
         setDark(!dark)
        }
         return(
             <div className={dark ? "dark active" : "dark"}>
                 <h1>ContextPage2</h1>
                 <button onClick={menufun}>dark</button>
             </div>
         )
    
}
export default ContextPage ;