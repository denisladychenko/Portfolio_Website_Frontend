import React from "react";

import "./BioSectionImgThenText.css";
import Container from "../../shared/components/Container";
import myPhoto from "../../images/myPicture.jpg";
import PhotoCard from "../../about/components/PhotoCard";
import ParagraphCard from "../../about/components/ParagraphCard";

const BioSectionImgThenText = props => {
    return (
        <Container className="bio-section-container">
            <PhotoCard containerClassName="photo-card-container" imageClassName="photo-card" src={props.src} alt={props.alt} />     
            <ParagraphCard title={props.title} containerClassName="right-paragraph-card-container" paragraphClassName="right-bio-paragraph">
                 {props.children}
            </ParagraphCard>
        </Container>
    );
};

export default BioSectionImgThenText;

