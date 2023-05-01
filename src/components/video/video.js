import React from "react";
import Box from '@mui/material/Box';
import "./style.css";
import video from '../../assets/video.mp4';
//import Audio from '../audio';
import { Link } from "react-router-dom";
import '../../assets/PiratlogoWebsite.jpg';

function Video() {
    return (

        <Box className="A">
            <Box className="B">
                <Link to="/">
                    <video autoPlay playsInline muted >
                        <source src={video} type="video/mp4" poster=""></source>
                    </video>
                </Link>
                {/* <Audio controls /> */}
            </Box>
        </Box>
    );
}

export default Video;