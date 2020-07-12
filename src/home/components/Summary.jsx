import React from "react";

import "../page/HomePage.css";


const Summary = props => {
    return (
        <p className={props.className}>
        {props.children}
        </p>
    );
};

export default Summary;

