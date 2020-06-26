import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

import "./NavBar.css";
import Container from "../components/Container";
import NavItem from "./NavItem";
import Title from "../components/Title";


const NavBar = () => {
    return (
        <header>
            <nav>
                <Container className="nav-bar">
                    <Container className="logo-container">
                        <Title className="logo">Denis Ladychenko</Title>
                    </Container>
                    <FontAwesomeIcon className="bars" icon={faBars} size="3x" color="white" />
                    <ul className="nav-item-list">
                        <NavItem className="nav-item-link" to="/" >Home</NavItem>
                        <NavItem className="nav-item-link" to="/about">About</NavItem>
                        <NavItem className="nav-item-link" to="/resume">Resume</NavItem>
                        <NavItem className="nav-item-link" to="/projects">Projects</NavItem>
                        <NavItem className="nav-item-link" to="/contact">Contact</NavItem>
                    </ul>
                </Container>
            </nav>
        </header>
    );
};

export default NavBar;