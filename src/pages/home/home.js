import React from 'react';
//import { Link } from 'react-router-dom';
//import Home from './pages/home/home';
//import Under from './pages/under/under';
import './home.css';
//import Video from '../../components/video/video';
import Grid from '@mui/material/Grid';
import { motion } from "framer-motion";
import '../../index.css'
import NestedGrid from '../../components/nestedGrid/nestedGrid';

function Home() {

    return (
        <>
            <motion.div className="homeTwoGrid" initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}>

                <Grid container className="homeTwoGrid" sx={{ display: 'flex' }}>


                    <Grid item className="homeTwoGrid" xs={1} sx={{ backgroundColor: 'black', height: '10vh' }} ></Grid>
                    <Grid item className="welcome" xs={10} sx={{ backgroundColor: 'black', height: '10vh' }} ></Grid>
                    <Grid item className="homeTwoGrid" xs={1} sx={{ backgroundColor: 'black', height: '10vh' }}></Grid>

                    <Grid item className="noFun" xs={1} sx={{ backgroundColor: 'black', height: '75vh' }}></Grid>
                    <Grid item className="center" xs={10} sx={{}}>
                        <NestedGrid className='nestedGrid'>
                           
                        </NestedGrid>
                    </Grid>
                    <Grid item className="scratch" xs={1} sx={{ backgroundColor: 'black', height: '75vh' }}></Grid>

                    <Grid item className="seven" xs={1} sx={{ backgroundColor: 'black', height: '10vh' }}></Grid>
                    <Grid item className="trigger" xs={10} sx={{ backgroundColor: 'black', height: '10vh' }}></Grid>
                    <Grid item className="nine" xs={1} sx={{ backgroundColor: 'black', height: '10vh' }}></Grid>

                </Grid >

            </motion.div >
        </>
    )
}

export default Home;