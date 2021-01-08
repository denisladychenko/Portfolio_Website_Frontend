import React from "react";
import { NavLink} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload} from "@fortawesome/free-solid-svg-icons";

import "./ResumePage.css";
import ContentHeading from "../../shared/Heading/ContentHeading";
import Container from "../../shared/components/Container";
import ResumeSection from "../components/ResumeSection";
import PhotoCard from "../../about/components/PhotoCard";
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
                    <PhotoCard containerClassName="resume-photo-container" imageClassName="resume-photo" src="/assets/images/myPicture.png" alt="Denis Ladychenko photo"></PhotoCard>
                    <Container className="resume-heading-middle-container">
                        <p className="resume-bold-heading" >Website:</p>
                        <p className="resume-bold-heading" >Email:</p>
                        <p className="resume-bold-heading" >Cell: </p>
                        <p className="resume-bold-heading" >GitHub: </p>
                        <p className="resume-bold-heading" >LinkedIn: </p>
                    </Container>
                    <Container className="resume-heading-right-container">
                    <NavLink to="/" >dsladychenko.com</NavLink>
                    <a href="mailto:dsladychenko@gmail.com">dsladychenko@gmail.com</a>
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
                    <br />
                    <p className="resume-section-title" >Walters State Community College<span id="wscc-date">01/16 - 12/18</span></p>
                    <p className="resume-section-paragraph" >AAS Computer Information Technology: Programming</p>
                    <p className="resume-section-paragraph" >GPA: 3.7</p>
                    <p className="resume-section-paragraph" >Leslie LeDuc scholarship awardee</p>
                </ResumeSection>
                <ResumeSection title="EXPERIENCE" className="resume-section">
                    <div className="experience-languages-container">
                        <ul>
                            <li>
                                <p className="resume-section-paragraph">Java:</p>
                            </li>
                            <li>
                                <p className="resume-section-paragraph">C++:</p>
                            </li>
                            <li>
                                <p className="resume-section-paragraph">JavaScript:</p>
                            </li>
                        </ul>
                    </div>
                    <div className="experience-years-container">
                        <p className="resume-section-paragraph">2 years</p>
                        <p className="resume-section-paragraph">2 years</p>
                        <p className="resume-section-paragraph">1 year</p>
                    </div>
                </ResumeSection>
                <ResumeSection title="PROJECTS" className="resume-section">
                <ol>
                    <p className="resume-section-title">January, 2020</p>
                        <li>
                            <div className="project-item">
                                <p className="resume-section-paragraph" ><span className="resume-project-name">"Portfolio Website"</span></p>
                                <p className="it resume-section-paragraph">Accomplishments:</p>
                                <ul>
                                    <li><p className="resume-section-paragraph">Developed a frontend.</p></li>
                                    <li><p className="resume-section-paragraph">Developed a backend.</p></li>
                                    <li><p className="resume-section-paragraph">Implemented communication with database.</p></li>
                                </ul>
                                <p className="it resume-section-paragraph">Technologies used:</p>
                                <ul>
                                    <li><p className="resume-section-paragraph">React.js</p></li>
                                    <li><p className="resume-section-paragraph">Node.js</p></li>
                                    <li><p className="resume-section-paragraph">Express.js</p></li>
                                    <li><p className="resume-section-paragraph">jQuery</p></li>
                                    <li><p className="resume-section-paragraph">Bootstrap</p></li>
                                </ul>
                                <a href="https://github.com/denisladychenko/Portfolio_Website_Frontend">GitHub link</a>
                            </div>
                        </li>
                    <p className="resume-section-title" >August, 2019</p>
                    <li>
                        <div className="project-item">
                            <p className="resume-section-paragraph" ><span className="resume-project-name">"Connect4 game"</span> a network based game application.</p>
                            <p className="resume-section-paragraph">*Allows user to play a Connect4 game locally or across the Network</p>
                            <p className="resume-section-paragraph">*Allows user to play against another player or against a computer player</p>
                            <p className="resume-section-paragraph">*Allows user to play using graphical user interface or console based interface</p>
                            <p className="it resume-section-paragraph">Accomplishments:</p>
                            <ul>
                                <li><p className="resume-section-paragraph">Developed the game engine.</p></li>
                                <li><p className="resume-section-paragraph">Implemented network communication with Sockets and Multi-Threading.</p></li>
                                <li><p className="resume-section-paragraph">Implemented GUI using JavaFX library.</p></li>
                                <li><p className="resume-section-paragraph">Implemented JUnit test cases to test the program.</p></li>
                            </ul>
                            <p className="it resume-section-paragraph">Technologies used:</p>
                            <ul>
                                <li><p className="resume-section-paragraph">Java</p></li>
                                <li><p className="resume-section-paragraph">JavaFX</p></li>
                                <li><p className="resume-section-paragraph">JUnit</p></li>
                            </ul>
                            <a href="https://github.com/denisladychenko/Connect4-game">GitHub link</a>
                        </div>
                    </li>
                    <p className="resume-section-title">December, 2018</p>
                    <li>
                    <div className="project-item">
                            <p className="resume-section-paragraph" ><span className="resume-project-name">"Snake Game"</span> a mobile game application.</p>
                            <p className="resume-section-paragraph">*Allows user to play a snake game.</p>
                            <p className="resume-section-paragraph">*Allows user to store the score in a database.</p>
                            <p className="resume-section-paragraph">*Allows user to save the state of the game in the database.</p>
                            <p className="it resume-section-paragraph">Accomplishments:</p>
                            <ul>
                                <li><p className="resume-section-paragraph">Developed the game engine.</p></li>
                                <li><p className="resume-section-paragraph">Implemented communication with a database.</p></li>
                                <li><p className="resume-section-paragraph">Implemented GUI.</p></li>
                            </ul>
                            <p className="it resume-section-paragraph">Technologies used:</p>
                            <ul>
                                <li><p className="resume-section-paragraph">Java</p></li>
                                <li><p className="resume-section-paragraph">Android Studio</p></li>
                                <li><p className="resume-section-paragraph">SQLite</p></li>
                            </ul>
                            <a href="https://github.com/denisladychenko/Snake_Game">GitHub link</a>
                        </div>
                    </li>
                    <p className="resume-section-title">January, 2018</p>
                    <li>
                    <div className="project-item">
                            <p className="resume-section-paragraph" ><span className="resume-project-name">"PiZZeria"</span> a Point of Sale application.</p>
                            <p className="resume-section-paragraph">*Allows user to create a custom menu of products.</p>
                            <p className="resume-section-paragraph">*Allows user to create orders, print tickets, and store orders in database.</p>
                            <p className="resume-section-paragraph">*Allows user to create sales reports.</p>
                            <p className="resume-section-paragraph">*Supports concurrency.</p>
                            <p className="it resume-section-paragraph">Accomplishments:</p>
                            <ul>
                                <li><p className="resume-section-paragraph">Developed GUI using Java Swing library.</p></li>
                                <li><p className="resume-section-paragraph">Implemented a menu creation tool that allows user to create a custom menu</p></li>
                                <li><p className="resume-section-paragraph">Implemented the PostgreSQL support for storing data in and retrieving from database.</p></li>
                            </ul>
                            <p className="it resume-section-paragraph">Technologies used:</p>
                            <ul>
                                <li><p className="resume-section-paragraph">Java</p></li>
                                <li><p className="resume-section-paragraph">Swing</p></li>
                                <li><p className="resume-section-paragraph">PostgreSQL</p></li>
                            </ul>
                            <a href="https://github.com/denisladychenko/PiZZeria_Application.git">GitHub link</a>
                        </div>
                    </li>
                </ol>
                </ResumeSection>
                <div className="download-btn-container">
                <a className="btn btn-danger download-btn" href="/assets/Denis_Ladychenko_Resume.pdf" download="Denis_Ladychenko_Resume" >
                <FontAwesomeIcon id="download-icon" icon={faDownload}  color="white" />
                 Download PDF
                </a>
                </div>
                    
                    
                
            </Container>
        </React.Fragment>
    );
};

export default ResumePage;