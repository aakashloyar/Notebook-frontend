import './App.css';
//import ReactDOM from "react-dom/client";
import React,{useState} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/Navbar';
import Home from './components/Home'
import About from './components/About'
import Alert from './components/Alert.js'
//import Layout from './components/Layout'
import Login from './components/Login'
import Signup from './components/Signup'
import NoteState from './context/notes/notestate';
function App() {
  const[alert,setalert]=useState({msg:"",type:""});
  const showAlert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    console.log("hi i am in alert");
    setTimeout(()=>{
      setalert({msg:"",type:""});
    },1500);
  }
  return (

    <>
      
      <NoteState>
        <BrowserRouter>
          {/* <Alert alert={alert}/> */}
          <Routes>
          <Route path="/" element={<NavBar alert={alert}/> }>
            <Route index element={<Home showAlert={showAlert} />} />
              <Route path="/about" element={<About showAlert={showAlert}/>} />
              <Route path="/login" element={<Login showAlert={showAlert}/>} />
              <Route path="/signup" element={<Signup showAlert={showAlert}/>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
