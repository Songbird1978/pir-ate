import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Home from './pages/home/home';
import Under from './pages/under/under';
import Mxnifesto from './pages/mxnifesto/mxnifesto';
import './App.css';
import { AnimatePresence } from "framer-motion";
import Video from '../src/components/video/video';


function App() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <Video />
      
      <div className="App">
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/under" element={<Under />} />
            <Route path="/mxnifesto" element={<Mxnifesto />} />
          </Routes>
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;
