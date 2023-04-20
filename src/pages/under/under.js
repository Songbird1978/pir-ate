import React from 'react';
import { Link } from "react-router-dom";
//import circuit from './assets/circuitboard.jpg';
import construction from '../../assets/menatwork.png';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import '../under/under.css'
import '../../index.css'


function Under() {

    return (
        <>
            <Container>
                <Grid item className="construction">
                    <Link to="./">
                        <img src={construction} alt="under-construction" className="construction" />
                    </Link>
                </Grid>
            </Container>
            <Grid item className="words">
                <p>Under Construction</p>
            </Grid>
        </>

    );

}

export default Under;