import React from 'react';
import { Link } from "react-router-dom";
//import circuit from './assets/circuitboard.jpg';
import Container from '@mui/material/Container';
import '../under/under.css'
import '../../index.css'


function Under() {

    return (
        <>
            <Link to="./">
                <Container className="containerConstruction">
                </Container>
            </Link>

        </>

    );

}

export default Under;