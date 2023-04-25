import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Blog from './component/Blog';
import Home from './component/Home';
import Login from './component/Login';
import { useSelector ,useDispatch} from 'react-redux';
import Add from './component/Add';
import Profile from './component/Profile';
import YoursBlog from './component/YoursBlog';
import BlogUpdate from './component/BlogUpdate';
import { useState,useEffect } from "react";
import { authActions } from "./store";

function App() {
  const dispatch = useDispatch();
  const isLoggedIn=useSelector(state=>state.isLoggedIn);
  console.log(isLoggedIn);
  useEffect(() => {
    if (localStorage.getItem("userId")) {
      dispatch(authActions.login());
    }
  }, [localStorage]);
  const [mode,setMode]=useState('light');
      const toggleMode=()=>{
        if(mode ==='light'){
          setMode('dark');
          document.body.style.backgroundColor='#2e2727';
          document.body.style.color='white';
          console.log('clicked');
        }
        
        else {
          setMode('light');
          document.body.style.backgroundColor='white';
          document.body.style.color='black';
          console.log('clicked');
        }
      }
 
  return (
   <div>
   <header>
  <Header  mode={mode} toggleMode={toggleMode} />

   </header>

   <section>
   
    <Routes>
    <Route path="/" element={<Home mode={mode} toggleMode={toggleMode}/>}></Route>
    <Route path="/blogs" element={<Blog mode={mode} toggleMode={toggleMode}/>}></Route>
    <Route path="/login" element={<Login mode={mode} toggleMode={toggleMode}/>}></Route>
    <Route path="/add" element={<Add mode={mode} toggleMode={toggleMode}/>}></Route>
    <Route path="/profile" element={<Profile mode={mode} toggleMode={toggleMode}/>}> </Route>
    <Route path="/yours-blogs" element={<YoursBlog mode={mode} toggleMode={toggleMode}/>}></Route>
    <Route path="/blog/:id" element={<BlogUpdate mode={mode} toggleMode={toggleMode}/>}></Route>
    
    </Routes>
 

   </section>
   </div>
  );
}

export default App;
