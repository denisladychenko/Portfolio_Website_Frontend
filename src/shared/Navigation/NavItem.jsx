import React from "react";
import { NavLink } from "react-router-dom";
import $ from "jquery";

import "./NavItem.css";

const NavItem = props => {

    const NavItemClickHandler = () => {
       if( $(".nav-item-list").hasClass("showing")){
            $(".nav-item-list").removeClass("showing");
       }

    };

    return (
        <li className="nav-item" onClick={NavItemClickHandler}>
            <NavLink className={props.className} to={props.to} >
                {props.children}
            </NavLink>
        </li>
    );
};

export default NavItem;