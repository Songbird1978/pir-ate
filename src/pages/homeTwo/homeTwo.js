import React from 'react';
import { Link } from 'react-router-dom';
//import Home from './pages/home/home';
//import Under from './pages/under/under';
//import Logo from '../src/components/logo/logo';
//import { AnimatePresence } from "framer-motion";
//import circuit from './assets/circuitboard.jpg';
//import Container from '@mui/material/Container';vaa
import './homeTwo.css';
//import Video from '../../components/video/video';
import Grid from '@mui/material/Grid';
import { motion } from "framer-motion";
import '../../index.css'
//import Welcome from '../../assets/welcome.png';
//import ratty from '../../assets/logo.png';


function HomeTwo() {

    return (
        <>
            <motion.div className="homeTwoGrid" initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}>

                <Grid container className="homeTwoGrid">


                    <Grid item className="homeTwoGrid" xs={1} style={{ backgroundColor: 'black', height: '10vh' }} ></Grid>
                    <Grid item className="welcome" xs={10} style={{ backgroundColor: 'black', height: '10vh' }} ></Grid>
                    <Grid item className="homeTwoGrid" xs={1} style={{ backgroundColor: 'black', height: '10vh' }}></Grid>

                    <Grid item className="noFun" xs={1} style={{ backgroundColor: 'black', height: '75vh' }}></Grid>
                    <Grid item className="center" xs={10} style={{ backgroundColor: 'black' }}>

                        <Grid container className="nestedGrid" style={{ display: 'flex' }}>

                            <Grid item className="topLeft" xs={6} style={{ height: '25vh' }}>
                                <Link to="/mxnifesto" style={{ textDecoration: 'none' }}>
                                    <button className="linkBtn">
                                        Mxnifesto
                                    </button>
                                </Link>
                            </Grid>

                            <Grid item className="topRight" xs={6} style={{ height: '25vh' }}>
                                <Link  style={{ textDecoration: 'none' }}>
                                    <button className="linkBtn">
                                        Articles
                                    </button>
                                </Link>
                            </Grid>

                            <Grid item className="midLeft" xs={3.5} style={{ height: '25vh' }}>
                                <Link style={{ textDecoration: 'none' }}>
                                    <button className="linkBtn">
                                        GiftShop
                                    </button>
                                </Link>
                            </Grid>

                            <Grid item className="nestedCenter" xs={5} style={{}}></Grid>

                            <Grid item className="midRight" xs={3.5} style={{ height: '25vh' }}>
                                <Link style={{ textDecoration: 'none' }}>
                                    <button className="linkBtn">
                                        Shows
                                    </button>
                                </Link>
                            </Grid>

                            <Grid item className="bottomLeft" xs={6} style={{ height: '25vh' }}>
                                <Link style={{ textDecoration: 'none' }}>
                                    <button className="linkBtn">
                                        Network  </button>
                                </Link>
                            </Grid>

                            <Grid item className="bottomRight" xs={6} style={{ height: '25vh' }}>
                                <Link style={{ textDecoration: 'none' }}>
                                    <button className="linkBtn">
                                        Info
                                    </button>
                                </Link>
                            </Grid>

                        </Grid>

                    </Grid>
                    <Grid item className="scratch" xs={1} style={{ backgroundColor: 'black', height: '75vh' }}></Grid>


                    <Grid item className="seven" xs={1} style={{ backgroundColor: 'black', height: '10vh' }}></Grid>
                    <Grid item className="trigger" xs={10} style={{ backgroundColor: 'black', height: '10vh' }}></Grid>
                    <Grid item className="nine" xs={1} style={{ backgroundColor: 'black', height: '10vh' }}></Grid>

                </Grid >

            </motion.div >
        </>
    )
}

export default HomeTwo;