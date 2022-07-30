import React, { useContext } from "react";
import './App.css'
import {DataContext}from './Context/DataContext'
import {BrowserRouter as Router,Routes ,Route,Link} from 'react-router-dom'
import ContextPage from "./Context/ContextPage";
import ContextPage2 from "./Context/ContextPage2";

function App() {
    const {dark,setDark}=useContext(DataContext);
    const munefun=()=>{
      setDark(!dark)
    }
  return (
    <div className='app'>
        <Router>
           <nav className={dark ? "dark active" :"dark"} style= {dark ? {background:'black'}: {background:'green'}}>
             <h1>Logo</h1>
             <li><Link to="/">page1</Link></li>
             <li><Link to="/page2">page2</Link></li>
             <button onClick={munefun}>dark</button>
           </nav>
           <Routes>
              <Route path="/" element={<ContextPage/>}/>
              <Route path="/page2" element={<ContextPage2/>}/>
           </Routes>
       </Router>      
    </div>
  );
  }

export default App;