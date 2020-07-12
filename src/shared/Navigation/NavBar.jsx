import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import $ from "jquery";

import "./NavBar.css";
import Container from "../components/Container";
import NavItem from "./NavItem";
import Title from "../components/Title";


const NavBar = () => {

    const BarsClickHandler = () => {
        $(".nav-item-list").toggleClass("showing");
    };


    return (
        <header>
            <nav>
                <Container className="nav-bar">
                    <Container className="logo-container">
                        <Title className="logo">Denis Ladychenko</Title>
                    </Container>
                    <FontAwesomeIcon className="bars" icon={faBars} size="3x" color="white" onClick={BarsClickHandler} />
                    <ul className="nav-item-list">
                        <NavItem  to="/home"   className="nav-item-link" >Home</NavItem>
                        <NavItem  to="/about"   className="nav-item-link" >About</NavItem>
                        <NavItem  to="/resume"   className="nav-item-link" >Resume</NavItem>
                        <NavItem  to="/projects"  className="nav-item-link" >Projects</NavItem>
                        <NavItem  to="/contact"   className="nav-item-link" >Contact</NavItem>
                    </ul>
                </Container>
            </nav>
        </header>
    );
};

export default NavBar;