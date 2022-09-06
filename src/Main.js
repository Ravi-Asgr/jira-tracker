import React, { useState, useEffect } from "react";
import ProjectInfo from './ProjectInfo';
import ProjectMisc from "./ProjectMisc";
import ProjectLead from "./ProjectLead";
import ComponentList from "./ComponentList";

const Main = () => {
    const [projectDetails, setProjectDetails] = useState([]);

    useEffect(() => {
        fetch('/jira/rest/api/2/project/AMQ')
            .then((response) => response.json())
            .then(
                (data) => {
                    console.log(data);
                    setProjectDetails(data);
                },
                (err) => {
                    //setIsLoaded(true);
                    //setError(error);
                    console.log(err.message);
                }
            )
            
    }, [])

    return (
        <article className="container article">
            <h2 className="h2 article-title">Hi Elizabeth</h2>
            <p className="article-subtitle">Welcome to Dashboard!</p>
            <section className="home">
               { Object.keys(projectDetails).length != 0 && <ProjectInfo projectData = {projectDetails} /> }
               { Object.keys(projectDetails).length != 0 && <ProjectMisc projectData = {projectDetails} /> }
               { Object.keys(projectDetails).length != 0 && <ProjectLead projectData = {projectDetails.lead} /> }
            </section>
            <section className="tasks">
            { Object.keys(projectDetails).length != 0 && <ComponentList projectData = {projectDetails.components} /> }
            </section>
        </article>
    );
}

export default Main;