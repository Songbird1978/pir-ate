import React from "react";
import "./style.css";
import video from '../../assets/video.mp4';
import Logo from '../logo/logo';
import Contact from '../contact/contact'
import '../../index.css'

function Video() {
    return (

        <>
            <Logo />
           
            <video autoPlay loop >
                <source src={video} type="video/mp4" ></source>
            </video>
            
             <p>Site Under Construction</p>
             <Contact />

        </>
    );
}

export default Video;