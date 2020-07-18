import React from "react";


import Container from "../../shared/components/Container";
import PhotoCard from "../../about/components/PhotoCard";
import ParagraphCard from "../../about/components/ParagraphCard";

const BioSectionTextThenImg = props => {
    return (
        <Container className="bio-section-container">   
            <ParagraphCard title={props.title} containerClassName="left-paragraph-card-container" paragraphClassName="left-bio-paragraph">
                 {props.children}
            </ParagraphCard>
            <PhotoCard containerClassName="photo-card-container" imageClassName="photo-card"  src={props.src} alt={props.alt} />  
        </Container>
    );
};

export default BioSectionTextThenImg;