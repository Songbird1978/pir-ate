import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
//import Navbar from './components/navbar/navbar';
import Home from './pages/home/home';
import Under from './pages/under/under';
import Contact from '../src/components/contact/contact';
import Logo from '../src/components/logo/logo';
import './App.css';
//


function App() {
  const location = useLocation()
  return (
    <>
      <Logo />
      <Contact />

      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/under" element={<Under />} />
        </Routes>



      </div>

    </>

  );
}

export default App;
