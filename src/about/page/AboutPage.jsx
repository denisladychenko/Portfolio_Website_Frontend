import React from "react";

import "./AboutPage.css";
import ContentHeading from "../../shared/Heading/ContentHeading";
import Container from "../../shared/components/Container";
import BioSectionImgThenText from "../components/BioSectionImgThenText";
import BioSectionTextThenImg from "../components/BioSectionTextThenImg";
import * as bundle from "../components/AboutMeContent";


const AboutPage = () => {
    return (
        <React.Fragment>
            <ContentHeading className="heading-container">
                About Me
            </ContentHeading>
            <Container className="container" > 
                <BioSectionImgThenText title="Bio" src="/assets/images/myPicture.jpg" alt="Denis Ladychenko Photo">
                {bundle.BioText}
                </BioSectionImgThenText>
                <BioSectionTextThenImg title="Family" src="/assets/images/my_family_2.png" alt="Family">
                {bundle.FamilyText}
                </BioSectionTextThenImg>
                <BioSectionImgThenText title="Walters State Community College" src="/assets/images/WSCC_copy_1.png" alt="Walters State Community College photo">
                {bundle.WSCCText}
                </BioSectionImgThenText>
                <BioSectionTextThenImg title="Arizona State University" src="/assets/images/arizona-state-university.png" alt="Arizona State University photo">
                {bundle.ASUText}
                </BioSectionTextThenImg>
                <BioSectionImgThenText title="Soccer" src="/assets/images/soccer.png" alt="Ladychenko Denis Soccer Photo">
                {bundle.SoccerText}
                </BioSectionImgThenText>
                <BioSectionTextThenImg title="Snowboard" src="/assets/images/snowboard_1.png" alt="Ladychenko Denis Snowboard photo">
                {bundle.SnowbordText}
                </BioSectionTextThenImg>
            </Container>
            
        </React.Fragment>
    );
};

export default AboutPage;