import React from 'react';
import Twitter from '../../assets/twitter.svg';
import Insta from '../../assets/insta.svg';
import Email from '../../assets/whiteemail.svg';
import './style.css';
import Container from '@mui/material/Container';

function Contact() {

    return (

        <Container className="containercontact">


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
                        <img className="icon" src={Email} type="button" alt="Email icon" />
                    </a>
                </li>

            </ul>



        </Container>
    )
}

export default Contact;