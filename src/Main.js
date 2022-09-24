import React, { useState, useEffect, useRef } from "react";
import { useLocation, useSearchParams } from 'react-router-dom';
import ProjectInfo from './ProjectInfo';
import ProjectMisc from "./ProjectMisc";
import ProjectLead from "./ProjectLead";
import ComponentList from "./ComponentList";

const Main = (props) => {

    const [projectDetails, setProjectDetails] = useState([]);
    //props.linkProp = useRef(null);;

    //const location = useLocation();
    //console.log('param passed is: ' + location.state.name);
    console.log('Main.js prop user name: ' + props.userName);
    
    const apiParam = {
        method: 'GET', 
        headers: new Headers({
            'Authorization': 'Bearer MTY4OTQ1NTA1Njk3OkoXi4rU/OGcQYOJXXky5q1zr2lL' 
        }) 
    };

    const fetchProject = () => {
        fetch('/rest/api/2/project/DFM', apiParam)          
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
    };

    useEffect(fetchProject, []);

    return (
        <article className="container article">
            <h2 className="h2 article-title">Hi {props.userName}</h2>
            <p className="article-subtitle">Welcome to Dashboard!</p>
            <section className="home" ref={props.projectLink}>
               { Object.keys(projectDetails).length != 0 && <ProjectInfo projectData = {projectDetails} /> }
               { Object.keys(projectDetails).length != 0 && <ProjectMisc projectData = {projectDetails} /> }
               { Object.keys(projectDetails).length != 0 && <ProjectLead projectData = {projectDetails.lead} /> }
            </section>
            { Object.keys(projectDetails).length != 0 && <ComponentList userName={props.userName} boardLink={props.boardLink} /> }
        </article>
    );
}

export default Main;