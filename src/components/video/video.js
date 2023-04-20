import React from "react";
import "./style.css";
import video from '../../assets/video.mp4';
import {Link} from "react-router-dom";

<Link to="/Dashboard"> Dashboard </Link>



function Video() {
    return (

        <>
            <Link to="./under">
                <video autoPlay loop >
                    <source src={video} type="video/mp4" ></source>
                </video>
            </Link>
        </>
    );
}

export default Video;