import React, { useEffect, useState } from "react";
import Card from "../../shared/components/Card";

import "./ProjectsPage.css";
import ContentHeading from "../../shared/Heading/ContentHeading";
import Container from "../../shared/components/Container";




const ProjectsPage = () => {
    const [projects, setProjects ] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        
        setIsLoading(true);
        fetch(process.env.REACT_APP_BACKEND_URL + "/projects")
        .then(response => response.json())
        .then((response) => setProjects(() => {

            if(!response.ok){
                console.log("Something is wrong!" + response.message);
            }
            const data = response;
            
            let groups = [];   //grouping of 3 cards
            let group = [];    //group of 3 cards to be displayed in a single row
            let i;

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
        
            return groups;
            }))
            .catch((err) => {
                setIsLoading(false);
                setError(err.message);
            });
            setIsLoading(false);
    }, []);
    

    return (
        <React.Fragment>
        {isLoading && <p>Loading projects...</p>}
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