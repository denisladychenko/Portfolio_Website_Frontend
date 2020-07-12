import React from "react";

import "./ContactPage.css";
import ContentHeading from "../../shared/Heading/ContentHeading";
import ContactMeForm from "../components/ContactMeForm";
// import Container from "../../shared/components/Container";

const ContactPage = () => {
    return (
        <React.Fragment>
            <ContentHeading className="heading-container">
                Contact Me
            </ContentHeading>
            <ContactMeForm />
        </React.Fragment>
    );
};

export default ContactPage;