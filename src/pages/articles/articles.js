import React from 'react';
//import { Link } from 'react-router-dom';
//import Home from './pages/home/home';
//import Under from './pages/under/under';
import './articles.css';
import Grid from '@mui/material/Grid';
import { motion } from "framer-motion";
import '../../index.css'
import Card from '../../components/article/article';


function Articles() {

    return (
        <>
            <motion.div className="" initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}>
              
                <Grid container className="" sx={{ display: 'flex' }}>


                    <Grid item className="homeTwoGrid" xs={1} sx={{ backgroundColor: 'black', height: '10vh' }} ></Grid>
                    <Grid item className="welcome" xs={10} sx={{ backgroundColor: 'black', height: '10vh' }} ></Grid>
                    <Grid item className="homeTwoGrid" xs={1} sx={{ backgroundColor: 'black', height: '10vh' }}></Grid>

                    <Grid item className="noFun" xs={1} sx={{ backgroundColor: 'black', height: '75vh' }}></Grid>
                    <Grid item className="center" xs={10} sx={{}}>
                       <Card></Card>


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

export default Articles;