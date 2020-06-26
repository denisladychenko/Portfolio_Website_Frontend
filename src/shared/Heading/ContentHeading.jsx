import React from "react";

import Container from "../components/Container";
import "./ContentHeading.css";

const ContentHeading = props => {
    return (
        <React.Fragment>
        <Container className={props.className}>
            <h1>{props.children}</h1>
        </Container>
        <hr />
        </React.Fragment>
    );
};

export default ContentHeading;