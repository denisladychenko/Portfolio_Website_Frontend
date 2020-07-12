import React from "react";

import "./Card.css";
import Container from "./Container";
import Image from "./Image";
import Paragraph from "./Paragraph";
import { useHistory } from "react-router-dom";


const Card = props => {


    const history = useHistory();
    function clickHandler ( event ) {
        history.push("/projects/" + props.id);

    };

    return (
        <Container className={`card ${props.className}`} onClick={ clickHandler }>
            <Container className="card-header">
                <h2 className="card-title">
                    {props.title}
                </h2>
            </Container>
            <Container className="card-body">
                <Image src={props.src} alt={props.alt}/>
            </Container>
            <Container className="card-footer">
                <Paragraph>
                    {props.tech}
                </Paragraph>
            </Container>
        </Container>
    );
}

export default Card;