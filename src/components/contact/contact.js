import React from 'react';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Twitter from '../../assets/twitter.svg';
import Insta from '../../assets/insta.svg';
import './style.css';

function Contact() {

    return (

        <div className="contact">

            <ul>
                <li>
                    <a href="https://www.twitter.com/pirat_lab/">
                        <img className="icon" src={Twitter} type="button" alt="twitter icon" />
                    </a>
                </li>

                <li>
                    <a href="https://www.instagram.com/pirat_lab/">
                        <img className="icon" src={Insta} type="button" alt="Insta icon" />
                    </a>
                </li>

                <li>
                    <a href="mailto:jcanepa5@gmail.com">
                      
                    </a>
                </li>

            </ul>

        </div>
    )
}

export default Contact;