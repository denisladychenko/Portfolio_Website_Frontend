import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import "./Footer.css";
import Paragraph from "../components/Paragraph";

const Footer = props => {
    const year = new Date().getFullYear();
    return (
        <footer className={props.className}>
            <FontAwesomeIcon className="icons" icon={faGithub} size="3x" color="white" />
            <FontAwesomeIcon className="icons" icon={faFacebook} size="3x" color="white" />
            <FontAwesomeIcon className="icons" icon={faLinkedin} size="3x" color="white" />
            <Paragraph className="copyright">{`©${year} Denis Ladychenko`}</Paragraph>
        </footer>
    );
};

export default Footer;