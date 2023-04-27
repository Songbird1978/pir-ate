import React from 'react';
//import { Link } from 'react-router-dom';
//import Home from './pages/home/home';
//import Under from './pages/under/under';
//import Logo from '../src/components/logo/logo';
//import { AnimatePresence } from "framer-motion";
//import circuit from './assets/circuitboard.jpg';
//import Container from '@mui/material/Container';vaa
import '../border/border.css'
//import Video from '../../components/video/video';
import Grid from '@mui/material/Grid';
import { motion } from "framer-motion";
import '../../index.css'
//import { BorderBottom } from '@mui/icons-material';
//import Welcome from '../../assets/welcome.png';
//import ratty from '../../assets/logo.png';


function Border() {

    return (
        <>
            <motion.div className="homeTwoGrid" initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}>

                <Grid container className="homeTwoGrid">

                    {/* first row of outer grid  */}
                    <Grid item className="homeTwoGrid" xs={1} style={{ backgroundColor: 'black', height: '10vh' }} ></Grid>
                    <Grid item className="welcome" xs={10} style={{ backgroundColor: 'black', height: '10vh' }} ></Grid>
                    <Grid item className="homeTwoGrid" xs={1} style={{ backgroundColor: 'black', height: '10vh' }}></Grid>

                    {/* second row of outer grid */}
                    <Grid item className="noFun" xs={1} style={{ backgroundColor: 'black', height: '75vh' }}></Grid>
                    <Grid item className="center" xs={10} style={{ backgroundColor: 'black', height: '75vh' }}></Grid>
                    <Grid item className="scratch" xs={1} style={{ backgroundColor: 'black', height: '75vh' }}></Grid>

                    {/* third row of outer grid  */}
                    <Grid item className="seven" xs={1} style={{ backgroundColor: 'black', height: '10vh' }}></Grid>
                    <Grid item className="trigger" xs={10} style={{ backgroundColor: 'black', height: '10vh' }}></Grid>
                    <Grid item className="nine" xs={1} style={{ backgroundColor: 'black', height: '10vh' }}></Grid>

                </Grid >

            </motion.div >
        </>
    )
}

export default Border;