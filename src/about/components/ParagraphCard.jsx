import React from "react";

import "./ParagraphCard.css";
import Paragraph from "../../shared/components/Paragraph";

const ParagraphCard = props => {
    return (
        <div className={props.containerClassName}>
            <div className="title-header-container">
                <h3>{props.title}</h3>
            </div>
            <Paragraph className={props.paragraphClassName}>
                {props.children}
            </Paragraph>
        </div>
    );
};


export default ParagraphCard;