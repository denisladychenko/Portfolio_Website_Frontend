import React from "react";



const ResponsiveImg = props => {
    return (
        <picture>
        { props.sources.map((source, index) => {
            return (<source key={index} media={source.media} srcSet={source.srcset} />)
        })
        }
        <img className={props.className} src={props.src} alt={props.alt} />
        </picture>
    );
};

export default ResponsiveImg;