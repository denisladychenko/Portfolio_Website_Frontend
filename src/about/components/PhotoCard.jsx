import React from "react";

import "./PhotoCard.css";
import Image from "../../shared/components/Image";

const PhotoCard = props => {
    return (
        <div className={props.containerClassName}>
            <Image className={props.imageClassName} src={props.src} alt={props.alt}/>
        </div>
    );
};


export default PhotoCard;