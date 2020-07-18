import React, { useEffect, useState } from "react";
import Card from "../../shared/components/Card";

import "./ProjectsPage.css";
import ContentHeading from "../../shared/Heading/ContentHeading";
import Container from "../../shared/components/Container";
import Message from "../../shared/components/Message";




const ProjectsPage = () => {
    const [projects, setProjects ] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        
        setIsLoading(true);
        fetch(process.env.REACT_APP_BACKEND_URL + "/projects")
        .then(response => response.json())
        .then((response) => setProjects(() => {

            const data = response;
            //sort from most recent projects to oldest
            data.sort((a, b) => {
                return new Date(b.timePeriod).getFullYear() - new Date(a.timePeriod).getFullYear();
            });
            
            let groups = [];   //grouping of 3 cards
            let group = [];    //group of 3 cards to be displayed in a single row
            let i;
            //separate projects in groups of 3
            for(i = 1; i <= data.length; i++){
                 if((i % 3) !== 0){
                    group.push(data[i - 1]);
                }else{
                    group.push(data[i - 1]);
                    groups.push(group);
                    group = [];
                }
            }
            //push the group of less than 3 elements
            if(group.length !== 0){
                groups.push(group);
            }
            setIsLoading(false);
            return groups;
            }))
            .catch((err) => {
                setIsLoading(false);
                setError(err.message);
            });
            
    }, []);

    const OkBtnClickHandler = (value, msgType) => {
        //closes message window depending on what type of message it is
        msgType === "info" ? setIsLoading(value) : setError(value); 
    }
    

    return (
        <React.Fragment>
        {isLoading && <img className="centered" src="/assets/images/cme-pl-ajax-loader.gif" alt="Loading..." />}     
        {error && <Message className="centered error message" msgHeaderClassName="error" title="Error" onOkButtonClick={OkBtnClickHandler}>{error}</Message>}
            <ContentHeading className="heading-container">
                Projects
            </ContentHeading>
            <Container className="container">

                
                { projects.map((gr, index) => {
                    return <div className="row" key={index}>
                            {gr.map((proj)=> {
                                console.log("P1 " + proj);
                             return <div className="col col-12 col-md-6 col-lg-4" key={proj._id}>
                                <Card  className="project-card" id={proj._id} title={proj.name} tech={proj.tech} src={ proj.image } alt={`${proj.name} screenshot`} ></Card>
                                </div>
                            })}
                       </div> 
                }) }
            </Container>
            
        </React.Fragment>
    );
};

export default ProjectsPage;