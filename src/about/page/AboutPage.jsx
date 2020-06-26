import React from "react";

import "./AboutPage.css";
import ContentHeading from "../../shared/Heading/ContentHeading";
import Container from "../../shared/components/Container";
import BioSectionImgThenText from "../components/BioSectionImgThenText";
import BioSectionTextThenImg from "../components/BioSectionTextThenImg";
import myPhoto from "../../images/myPicture.jpg";
import familyPhoto from "../../images/my_family_2.png";
import wscc from "../../images/WSCC_copy_1.png";
import asu from "../../images/arizona-state-university.png";
import snowboard from "../../images/snowboard_1.png"

const AboutPage = () => {
    return (
        <React.Fragment>
            <ContentHeading className="heading-container">
                About Me
            </ContentHeading>
            <Container className="container" > 
                <BioSectionImgThenText title="Bio" src={myPhoto} alt="Denis Ladychenko Photo">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                 dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa 
                  qui officia deserunt mollit anim id est laborum.
                </BioSectionImgThenText>
                <BioSectionTextThenImg title="Family" src={familyPhoto} alt="Family">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                 eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                 sunt in culpa qui officia deserunt mollit anim id est laborum.
                </BioSectionTextThenImg>
                <BioSectionImgThenText title="Walters State Community College" src={wscc} alt="Walters State Community College photo">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                in culpa qui officia deserunt mollit anim id est laborum.
                </BioSectionImgThenText>
                <BioSectionTextThenImg title="Arizona State University" src={asu} alt="Arizona State University photo">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </BioSectionTextThenImg>
                <BioSectionImgThenText title="Soccer" src={myPhoto} alt="Ladychenko Denis Soccer Photo">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                cupidatat non proident, sunt in culpa qui officia deserunt 
                mollit anim id est laborum.
                </BioSectionImgThenText>
                <BioSectionTextThenImg title="Snowboard" src={snowboard} alt="Ladychenko Denis Snowboard photo">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                </BioSectionTextThenImg>
            </Container>
            
        </React.Fragment>
    );
};

export default AboutPage;