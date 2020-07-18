import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import "./Footer.css";
import Paragraph from "../components/Paragraph";

const Footer = props => {
    const year = new Date().getFullYear();
    return (
        <footer className={props.className}>
            <a href="https://github.com/denisladychenko" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="icons" icon={faGithub} size="3x" color="white" /></a>
            <a href="https://www.facebook.com/denis.ladychenko" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="icons" icon={faFacebook} size="3x" color="white" /></a>
            <a href="https://linkedin.com/in/denis-ladychenko-6a2252140" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="icons" icon={faLinkedin} size="3x" color="white" /></a>
            <Paragraph className="copyright">{`©${year} Denis Ladychenko`}</Paragraph>
        </footer>
    );
};

export default Footer;