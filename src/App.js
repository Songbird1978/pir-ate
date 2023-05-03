import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Home from './pages/home/home';
import Under from './pages/under/under';
import Shop from './pages/shop/shop';
import Cart from './pages/shop/cart';
import Mxnifesto from './pages/mxnifesto/mxnifesto';
import Shows from './pages/shows/shows';
import Articles from './pages/articles/articles';
import Coop from './pages/articles/coop';
import Curious from './pages/articles/curious';
import Biden from './pages/articles/biden';
import Brexit from './pages/articles/brexit';
import Digging from './pages/articles/digging';
import './App.css';
import { AnimatePresence } from "framer-motion";


function App() {
  const location = useLocation();
  return (
    <>
     \
        <Navbar />

        <div className="App">

          <AnimatePresence>

            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/under" element={<Under />} />
              <Route path="/mxnifesto" element={<Mxnifesto />} />
              <Route path="/shows" element={<Shows />} />
              <Route path="/shop" element={<Shop />} />
                <Route path=":id" element={<Cart />} />
              <Route path="/articles" element={<Articles />} />
              <Route path=":id" element={<Coop />} />
              <Route path=":id" element={<Curious />} />
              <Route path=":id" element={<Brexit />} />
              <Route path=":id" element={<Digging />} />
              <Route path=":id" element={<Biden />} />
            </Routes>
          </AnimatePresence>
          </div >
     

 

        </>
        );
}

export default App;
