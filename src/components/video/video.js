import React from "react";
import "./style.css";
import video from '../../assets/video.mp4';
//import Audio from '../audio';

import { Link } from "react-router-dom";

<Link to="/Dashboard"> Dashboard </Link>



function Video() {
    return (

        <>
            <Link to="./under">
                <video autoPlay muted controls loop playsInline  >
                    <source src={video} type="video/mp4" ></source>
                </video>

            </Link>
            {/* <Audio /> */}
        </>
    );
}

export default Video;