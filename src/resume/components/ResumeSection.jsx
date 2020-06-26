import React from "react";

import "./ResumeSection.css";

const ResumeSection = props => {
    return (
        <div className={props.className}>
            <div className="resume-section-title-header-container">
                <h3>{props.title}</h3>
            </div>
            {props.children}
        </div>
    );
};

export default ResumeSection; 