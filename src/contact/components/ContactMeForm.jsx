import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";


import "./ContactMeForm.css";

const ContactMeForm = props => {
    return (
        <div className="container form-container">
            <div className="form-icon-container">
                <FontAwesomeIcon id="form-icon" icon={ faEnvelopeOpen } size="3x" color="lightBlue" />
            </div>
            <div className="contact-info-container">
                <table className="contact-info-table">
                    <tbody>
                        <tr>
                            <td><FontAwesomeIcon  className="contact-info-icon" icon={ faEnvelope } size="2x" /></td>
                            <td><a href="mailto:dsladychenko@gmail.com">dsladychenko@gmail.com</a></td>
                        </tr>
                        <tr>
                            <td><FontAwesomeIcon  className="contact-info-icon" icon={ faPhone } size="2x"/></td>
                            <td><a href="tel:1-678-899-0093">(678)899-0093</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <form  id="contact-me-form" name="form" action="mailto:dsladychenko@gmail.com" method="post" encType="text/plain">
                
                <input type="text" name="name" placeholder="Full Name"  required/>
                
                <input type="email" name="email" placeholder="Email Address"  required />
                <textarea rows="5" name="message" placeholder="Your Message" required />
                <input className="btn btn-primary btn-block" type="submit" value="Send"/>
            </form>
        </div>
    );
};

export default ContactMeForm;