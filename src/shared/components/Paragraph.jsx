import React from "react";


const Paragraph = props => {
    return (
        <p className={props.className} >
            {props.children}
        </p>
    );
};

export default Paragraph;