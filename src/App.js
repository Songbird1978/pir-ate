import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Home from './pages/home/home';
import Under from './pages/under/under';
import Mxnifesto from './pages/mxnifesto/mxnifesto';
import Shows from './pages/shows/shows';
import Articles from './pages/articles/articles';
import Coop from './pages/coop/coop';
import Curious from './pages/curious/curious';
import './App.css';
import { AnimatePresence } from "framer-motion";


function App() {
  //const location = useLocation();
  return (
    <>
      <Navbar />
      <div className="App">
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>

            <Route path="/" element={<Home />} />
            <Route path="/under" element={<Under />} />
            <Route path="/mxnifesto" element={<Mxnifesto />} />
            <Route path="/shows" element={<Shows />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/coop" element={<Coop />} />
            <Route path="/curious" element={<Curious />} />
          </Routes>
        </AnimatePresence>



        <div>

        </>
        );
}

        export default App;
