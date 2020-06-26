import React from "react";
import Container from "../../shared/components/Container";

import Image from "../../shared/components/Image";
import Title from "../../shared/components/Title";
import Summary from "../components/Summary";
import Button from "../../shared/components/Button";
import MyPhoto from "../../images/My_photo_copy.PNG";
import "./HomePage.css"

const HomePage = () => {
    return (
        <Container className="container centered-container">
            <Container className="row">
                <Container className="col-md-6 col-sm-12">
                    <Image className="my-photo" src={MyPhoto} alt="Denis Ladychenko"/>
                </Container>
                <Container className="col-md-6 col-sm-12">
                    <Title className="title">Full Stack Web Developer</Title>
                    <Summary className="summary" />
                    <Button className="button btn btn-lg btn-primary btn-block">Get To Know This Guy</Button>
                </Container>
            </Container>
        </Container>
    );
};

export default HomePage;