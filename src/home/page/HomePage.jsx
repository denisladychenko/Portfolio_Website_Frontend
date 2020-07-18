import React from "react";
import Container from "../../shared/components/Container";

import Title from "../../shared/components/Title";
import Summary from "../components/Summary";
import Button from "../../shared/components/Button";
import "./HomePage.css"
import ResponsiveImg from "../../shared/components/ResponsiveImg";
import { NavLink } from "react-router-dom";


const HomePage = () => {
    //this request is to wake up the Heroku server. Does not fetch any actual data
    fetch(process.env.REACT_APP_BACKEND_URL + "/");


const sources = [
    {
        media: "(max-width: 991px)",
        srcset: "/assets/images/my_photo_circle_300.png"
    },
    {
        media: "(min-width: 991px)",
        srcset: "/assets/images/My_photo_800.PNG"
    }
]

    return (
        
        <Container className="container centered-container">
            <Container className="row">
                <Container className="col-lg-6 col-md-12">
                    <ResponsiveImg className="my-photo" src="/assets/images/My_photo_copy.PNG" alt="Denis Ladychenko" sources={sources} />
                </Container>
                <Container className="col-lg-6 col-md-12">
                    <Title className="title">Full Stack Web Developer</Title>
                    <Summary className="summary">
                    Detail-oriented, experienced full stack web developer with
                     strong analytical and problem solving skills.
                      Knowledgable in different areas of web developement
                       such as frontend, backend, as well as database technologies.
                     Constantly learning new things and looking for ways to improve the skill set.
                    </Summary>
                    <NavLink to="/about"><Button className="button btn btn-lg btn-primary btn-block">Get To Know This Guy</Button></NavLink>
                </Container>
            </Container>
        </Container>
    );
};

export default HomePage;