//import Logo from './components/logo/logo';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
//import Navbar from './components/navbar/navbar';
import Home from './pages/home/home';

import './App.css';
import Video from './components/video/video'


function App() {
  return (
    <>   
    
       <Video />

    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="./home" element={<Home />} />
      </Routes>



    </div>

    </>

  );
}

export default App;
