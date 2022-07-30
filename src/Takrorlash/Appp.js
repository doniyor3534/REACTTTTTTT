import React from "react";
import './App.css'
// import './InputValue/Crud.css'
// import Crud2 from "./InputValue/Crud2";
// import Crud3 from "./InputValue/Crud3";
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom';
import Edit from './Takrorlash/Edit'
import Add from './Takrorlash/Add'
// import UseRef from "./UseReff/UseRef";
import UseRef2 from "./UseReff/UseRef2";


 function App() {
   
  return (
    <div  className="app">
        <Router>
          <Routes>
            <Route path="/" element={<UseRef2/>}/>
           
            <Route path="/add" element={<Add/>}/>
            <Route path="/edit/:id" element={<Edit/>}/>
          </Routes>
        </Router>
    </div>
  );
  }

export default App;
