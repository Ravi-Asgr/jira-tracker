import React from "react";
//import ProjectLead from "./ProjectLead";

const ProjectInfo = (props) => {
    //const [projectData, setProjectData] = useState([]);

    // useEffect(() => {
    //     fetch('/jira/rest/api/2/project/AMQ')
    //         .then((response) => response.json())
    //         .then(
    //             (data) => {
    //                 console.log(data);
    //                 setProjectData(data);
    //             },
    //             (err) => {
    //                 //setIsLoaded(true);
    //                 //setError(error);
    //                 console.log(err.message);
    //             }
    //         )
            
    // }, [])

        return(
            <div className="card profile-card">
                <div className="profile-card-wrapper">
                    <figure className="card-avatar">
                        <img src={props.projectData.avatarUrls["16x16"]} alt="Project" width="48" height="48"/>
                    </figure>
                    <div>
                        <p className="card-title">{props.projectData.name}</p>
                        <p className="card-subtitle"><a href={props.projectData.url} target="_blank">{props.projectData.key}</a></p>
                    </div>               
                    <ul className="contact-list">
                        <li>
                            <p className="contact-link icon-box text" style={{marginLeft: "30px"}}>Project Category: {props.projectData.projectTypeKey}</p>
                        </li>
                    </ul>
                </div> 
                
                <div className="divider card-divider"></div>
                <div>
                    {props.projectData.description}
                </div>  
            </div>

        );
}

export default ProjectInfo;