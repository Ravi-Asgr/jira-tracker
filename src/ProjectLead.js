import React, { useState, useEffect } from "react";
import { trackPromise } from 'react-promise-tracker';
import { Spinner } from './spinner/spinner';


const ProjectLead = (props) => {

    const [leadDetails, setLeadDetails] = useState([]);
    
    const apiParam = {
      method: 'GET', 
      headers: new Headers({
          'Authorization': 'Bearer MTY4OTQ1NTA1Njk3OkoXi4rU/OGcQYOJXXky5q1zr2lL' 
      }) 
    };
    
    
    const fetchLead = () => {
      trackPromise (
        fetch('/rest/api/2/user?username='+props.projectData.displayName, apiParam)
            
            .then((response) => response.json())
            .then(
                (data) => {
                    console.log(data);
                    setLeadDetails(data);
                },
                (err) => {
                    //setIsLoaded(true);
                    //setError(error);
                    console.log(err.message);
                }
            ), 
      "lead")
    }

    useEffect(fetchLead, []);


    return (
        <div className="card revenue-card">
          <button className="card-menu-btn icon-box" aria-label="More" data-menu-btn>
            <span className="material-symbols-rounded  icon">more_horiz</span>
          </button>

          <ul className="ctx-menu">

            <li className="ctx-item">
              <button className="ctx-menu-btn icon-box">
                <span className="material-symbols-rounded  icon" aria-hidden="true">edit</span>

                <span className="ctx-menu-text">Edit</span>
              </button>
            </li>

            <li className="ctx-item">
              <button className="ctx-menu-btn icon-box">
                <span className="material-symbols-rounded  icon" aria-hidden="true">cached</span>

                <span className="ctx-menu-text">Refresh</span>
              </button>
            </li>

          </ul>

          <p className="card-title">About Lead</p>

          { Object.keys(leadDetails).length != 0 && (
            <div className="profile-card-wrapper">
              <figure className="card-avatar">
                <img src={props.projectData.avatarUrls["16x16"]} alt="Project" width="48" height="48" />
              </figure>
              <div>
                <p className="card-title">{props.projectData.displayName}</p>
                <p className="card-subtitle">{leadDetails.emailAddress}</p>
              </div> 
            </div>
          )}
          
          <Spinner area="lead"/>

          <div className="divider card-divider"></div>
  
          <ul className="revenue-list">

            <li className="revenue-item icon-box">

              <span className="material-symbols-rounded  icon  green">trending_up</span>
              { Object.keys(leadDetails).length != 0 && (
                <div>
                  <data className="revenue-item-data" value={leadDetails.applicationRoles.size}>{leadDetails.applicationRoles.size}</data>

                  <p className="revenue-item-text">App... Roles</p>
                </div>
              )}

            </li>

            <li className="revenue-item icon-box">

              <span className="material-symbols-rounded  icon  red">trending_down</span>
              { Object.keys(leadDetails).length != 0 && (  
                <div>
                  <data className="revenue-item-data" value={leadDetails.groups.size}>{leadDetails.groups.size}</data>

                  <p className="revenue-item-text">Groups</p>
                </div>
              )}
            </li>

          </ul>

        </div>

    );
}

// class ProjectLead extends React.Component {

//     constructor(props) {
//         super(props);
//     }
    
//     render() {
//         return(
//             <div>
//                 Project Lead: {this.props.leadData.name} [{this.props.leadData.displayName}]
//             </div>
//         );
//     }

// }

export default ProjectLead;