import React from "react";

import "./Message.css";

const Message = props => {

    return (
        <div className={props.className}>
            <div className={`message-header ${props.msgHeaderClassName}`}><h2>{props.title}</h2></div>
            <div className="message-body">
            <p>{props.children}</p>
            <div className="ok-btn-container"><button className="btn btn-dark" onClick={(event) => {
                console.log(event.target);
                props.onOkButtonClick(false, props.msgHeaderClassName)
                }}>OK</button></div>
            </div>
            
        </div>
    );
};

export default Message;