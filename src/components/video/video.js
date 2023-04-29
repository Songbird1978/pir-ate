import React from "react";
import "./style.css";
import video from '../../assets/video.mp4';
//import Audio from '../audio';
import { Link } from "react-router-dom";

function Video() {
    return (

        <>
            <Link to="/homeTwo">
                <video autoPlay playsInline  >
                    <source src={video} type="video/mp4" ></source>
                </video>
            </Link>
            {/* <Audio controls /> */}
        </>
    );
}

export default Video;