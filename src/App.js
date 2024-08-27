import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import Features from "./components/Features";
import Alert from "./components/Alert";
import Login from "./components/Login";
import Signup from "./components/Signup";
import React, { useState } from 'react';

function App() {
  const [mode, setMode]= useState('light');

  const [alert, setAlert]= useState(null);

  const showAlert =(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);

  }

  const toggleMode = ()=>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enable", "success");
    }
    else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enable", "success");
    }
  }
  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Navbar />
          <Alert alert={alert} />
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home showAlert={showAlert}/>} />
              <Route exact path="/About" element={<About />} />
              <Route exact path="/login" element={<Login showAlert={showAlert}/>} />
              <Route exact path="/signup" element={<Signup showAlert={showAlert}/>} />
             <Route exact path="/Features" element={<Features />} />
            </Routes>
          </div>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
