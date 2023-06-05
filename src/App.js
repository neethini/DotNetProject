import React, { useState } from "react";
import './App.css';
import Login from './Login';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Signup from './Signup';
import Header from "./Header";
import Home from "./Home";
import Main from "./Main";


function App() {
  const [currentForm, setCurrentForm] = useState('main');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
      <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
        <Route path="/main" element={<Main />} ></Route>
        <Route path="/home" element={<Home />} ></Route>
        <Route path="/login" element={<Login />} ></Route>
        <Route path="/signup" element={<Signup/>} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
