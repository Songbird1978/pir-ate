import React from 'react';
import { Link } from "react-router-dom";

import Container from '@mui/material/Container';
import '../under/under.css'
import '../../index.css'
import { motion } from "framer-motion";
import Menatwork from "../../assets/menatwork.png"


function Under() {

    return (


        <>
            <Link to="./">
                <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}>
                    <Container className="containerConstruction">
                        <div className="menatworkanimation">
                            <motion.img src={Menatwork} alt="men at work artwork by Jose" className="menatwork" animate={{rotate: [0, 360, 360, 0]}} transition={{ repeat: "infiity", duration: 10}}></motion.img>
                        </div>
                    </Container>
                </motion.div>
            </Link>
        </>


    );

}

export default Under;