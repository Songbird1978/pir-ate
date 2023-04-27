import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Home from './pages/home/home';
import HomeTwo from './pages/homeTwo/homeTwo';
import Under from './pages/under/under';
import './App.css';
import { AnimatePresence } from "framer-motion";


function App() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      
      <div className="App">
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/under" element={<Under />} />
            <Route path="/homeTwo" element={<HomeTwo />} />
          </Routes>
        </AnimatePresence>
      </div>

    </>

  );
}

export default App;
