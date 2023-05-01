import React from 'react';
//import { Link } from "react-router-dom";
import '../shows/shows.css'
import '../../index.css'
//import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SimpleSlider from '../../components/simpleSlider/simpleSlider';
//import Box from '@mui/material/Box';

function Shows() {


    return (
        <div className="sliderBox">
            <SimpleSlider className="sliderBox" />
        </div>
    );

}

export default Shows;