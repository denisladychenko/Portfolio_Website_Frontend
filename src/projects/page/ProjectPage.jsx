import React, {useState, useEffect} from "react";

import "./PojectPage.css";
import ContentHeading from "../../shared/Heading/ContentHeading";
import { useParams } from "react-router-dom";

const ProjectPage = props => {
    const [project, setProject] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const { projectId } = useParams();

    useEffect(() => {
        setIsLoading(true);
        
        console.log(projectId);
        fetch(process.env.REACT_APP_BACKEND_URL + "/projects/" + projectId)
        .then(response => response.json())
        .then(response => {


         setProject(response);
        setIsLoading(false);
        })
        .catch((err) => {
            console.log(err);
        });

    }, []);

    

    return (
        <React.Fragment>
            {isLoading && (<p>Loading Project...</p>)}
            <ContentHeading className="heading-container">
                {project.name}
            </ContentHeading>
            <div className="container">
            <iframe style={{margin: "auto"}} width="100%" height="515" src={project.video} frameBorder="5" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </React.Fragment>
    );
};


export default ProjectPage;