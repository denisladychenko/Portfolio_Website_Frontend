import React from 'react';


const Title = props => {
    return (
        <h1 className={props.className} >
            {props.children}
        </h1>
    );
};

export default Title;