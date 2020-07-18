import React, {useState, useEffect} from "react";


import ContentHeading from "../../shared/Heading/ContentHeading";
import { useParams } from "react-router-dom";
import Message from "../../shared/components/Message";
import { dateFormatted } from "../../shared/utils/utils.js";

const ProjectPage = props => {
    const [project, setProject] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const { projectId } = useParams();

    useEffect(() => {
        setIsLoading(true);
        
        fetch(process.env.REACT_APP_BACKEND_URL + "/projects/" + projectId)
        .then(response => response.json())
        .then(response => {


        setProject(response);
        setIsLoading(false);
        })
        .catch((err) => {
            setIsLoading(false);
            setError(err.message);
        });

    }, [projectId]);

    const OkBtnClickHandler = (value, msgType) => {
        //closes message window
        setError(value); 
    }


   return (isLoading ? (<img className="centered" src="/assets/images/cme-pl-ajax-loader.gif" alt="Loading..." />) : 
       (<React.Fragment>
            {/* {isLoading && (<h1 className="centered">Loading Project...</h1>)} */}
            {error && <Message className="centered error message" msgHeaderClassName="error" title="Error" onOkButtonClick={OkBtnClickHandler}>{error}</Message>}
            <ContentHeading className="heading-container">
                {project.name}
            </ContentHeading>
            <div className="container">
            <h2>{dateFormatted(new Date(project.timePeriod))}</h2>
            <p>{project.description}</p>
            {(new String(new Array(project.github)[0]).length !== 0) ? <a href={project.github}>GitHub Link</a> : ""}
            
            <iframe title={project.name} style={{margin: "auto"}} width="100%" height="515" src={project.video} frameBorder="5" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </React.Fragment>)
    );
};


export default ProjectPage;