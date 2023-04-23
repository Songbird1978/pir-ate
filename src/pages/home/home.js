import React from 'react';

//import circuit from './assets/circuitboard.jpg';


import '../home/home.css'
import Video from '../../components/video/video';

import { motion } from "framer-motion";


function Home() {

    return (
        <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: window.innerWidth, transition: {duration: 0.1} }}>
            <>
                <Video className="video" />
            </>
            
        </motion.div >

    )
}

export default Home;