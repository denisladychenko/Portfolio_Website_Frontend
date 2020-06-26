import React from "react";
import { NavLink } from "react-router-dom";

import "./ResumePage.css";
import ContentHeading from "../../shared/Heading/ContentHeading";
import Container from "../../shared/components/Container";
import ResumeSection from "../components/ResumeSection";
import PhotoCard from "../../about/components/PhotoCard";
import myPhoto from "../../images/myPicture.jpg";
import ResumeHeading from "../components/ResumeHeading";
import Paragraph from "../../shared/components/Paragraph";

const ResumePage = () => {
    return (
        <React.Fragment>
            <ContentHeading className="heading-container">
                Resume
            </ContentHeading>
            <Container className="resume-container">
                <ResumeHeading className="resume-heading">
                    <PhotoCard containerClassName="resume-photo-container" imageClassName="resume-photo" src={myPhoto} alt="Denis Ladychenko photo"></PhotoCard>
                    <Container className="resume-heading-middle-container">
                        <p className="resume-bold-heading" >Website:</p>
                        <p className="resume-bold-heading" >Email:</p>
                        <p className="resume-bold-heading" >Cell: </p>
                        <p className="resume-bold-heading" >GitHub: </p>
                        <p className="resume-bold-heading" >LinkedIn: </p>
                    </Container>
                    <Container className="resume-heading-right-container">
                    <NavLink to="/" >www.dsladychenko.com</NavLink>
                    <a href="mailto:denisladychenko@gmail.com">denisladychenko@gmail.com</a>
                    <a href="tel:1-678-899-0093">(678)899-0093</a>
                    <a href="https://github.com/denisladychenko" >https://github.com/denisladychenko</a>
                    <a href="https://linkedin.com/in/denis-ladychenko-6a2252140" > https://linkedin.com/in/denis-ladychenko-6a2252140</a>
                    </Container>
                </ResumeHeading>
                <ResumeSection title="PROFESSIONAL SUMMARY" className="resume-section">
                    <Paragraph className="resume-section-paragraph">
                        Highly motivated and enthusiastic software developer. Developes 
                        well written, reusable, and clean code. Knows software design and 
                        architecture best practices. Has the strong math, problem solving, 
                        and algorithm skills. Constantly learning new technologies 
                        and attend various IT trainings.
                    </Paragraph>
                </ResumeSection>
                <ResumeSection title="TECHNICAL SKILLS" className="resume-section">
                    <p className="resume-section-title" >Programming languages:</p>
                    <p className="resume-section-paragraph" ><span className="indented-title">Fluent:</span><span id="fluent" >Java, JavaScript.</span></p>
                    <p className="resume-section-paragraph" ><span className="indented-title">Others:</span><span id="others" >HTML, CSS, C, C++.</span></p>
                    <p className="resume-section-paragraph" ><span className="indented-title">Frameworks:</span><span id="frameworks" >React.js, jQuery, Bootstrap, Node.js, Express.js.</span></p>
                    <p className="resume-section-title" >Tools:<span id="tools">Eclipse, Visual Studio, Visual Studio Code, GitHub</span></p>
                    <p className="resume-section-title" >Operating Systems:<span id="operating-systems" >Windows</span></p>
                </ResumeSection>
                <ResumeSection title="EDUCATION" className="resume-section">
                    <p className="resume-section-title" >Arizona State University<span id="asu-date">08/18 - 12/21</span></p>
                    <p className="resume-section-paragraph" >BS Software Engineering</p>
                    <p className="resume-section-paragraph" >GPA: 4.0</p>
                    <p className="resume-section-title" >Walters State Community College<span id="wscc-date">01/16 - 12/18</span></p>
                    <p className="resume-section-paragraph" >AAS Computer Information Technology: Programming</p>
                    <p className="resume-section-paragraph" >GPA: 3.7</p>
                    <p className="resume-section-paragraph" >Leslie LeDuc scholarship awardee</p>
                </ResumeSection>
                <ResumeSection title="EXPERIENCE" className="resume-section">

                </ResumeSection>
                <ResumeSection title="PROJECTS" className="resume-section">

                </ResumeSection>
            </Container>
        </React.Fragment>
    );
};

export default ResumePage;