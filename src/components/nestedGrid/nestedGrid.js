import React from 'react';
import { Link } from 'react-router-dom';
//import Home from './pages/home/home';
//import Under from './pages/under/under';
//import Logo from '../src/components/logo/logo';
//import { AnimatePresence } from "framer-motion";
//import circuit from './assets/circuitboard.jpg';
//import Container from '@mui/material/Container';vaa
import './nestedGrid.css';
//import Video from '../../components/video/video';
import Grid from '@mui/material/Grid';
//import { motion } from "framer-motion";
import '../../index.css'
//import Video from '../../components/video/video';
//import Welcome from '../../assets/welcome.png';
//import ratty from '../../assets/logo.png';


function NestedGrid() {

    return (
        <>

            <Grid container className="nestedGrid" sx={{ backgroundImage: 'url={Video}' }}>

                <Grid item className="topLeft" xs={6} style={{ height: '25vh' }}>
                    <button className="linkBtn">
                        <Link to="/mxnifesto" className="linkBtn" style={{ textDecoration: 'none' }}>
                            Mxnifesto
                        </Link>
                    </button>
                </Grid>

                <Grid item className="topRight" xs={6} sx={{ height: '25vh' }}>
                    <button className="linkBtn">
                        <Link className="linkBtn" style={{ textDecoration: 'none' }}>
                            Articles
                        </Link>
                    </button>
                </Grid>

                <Grid item className="midLeft" xs={3.5} sx={{ height: '25vh' }}>
                    <button className="linkBtn">
                        <Link className="linkBtn" style={{ textDecoration: 'none' }}>
                            GiftShop
                        </Link>
                    </button>
                </Grid>

                <Grid item className="nestedCenter" xs={5} ></Grid>

                <Grid item className="midRight" xs={3.5} sx={{ height: '25vh' }}>
                    <button className="linkBtn">
                        <Link className="linkBtn" style={{ textDecoration: 'none' }}>
                            Shows
                        </Link>
                    </button>
                </Grid>

                <Grid item className="bottomLeft" xs={6} sx={{ height: '25vh' }}>
                    <button className="linkBtn">
                        <Link className="linkBtn" style={{ textDecoration: 'none' }}>
                            Network
                        </Link>
                    </button>
                </Grid>

                <Grid item className="bottomRight" xs={6} sx={{ height: '25vh' }}>
                    <button className="linkBtn">
                        <Link className="linkBtn" style={{ textDecoration: 'none' }}>
                            Info
                        </Link>
                    </button>
                </Grid>

            </Grid>

        </>
    )
}

export default NestedGrid;