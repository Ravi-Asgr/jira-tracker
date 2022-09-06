import React, { Component } from "react";

const ProjectLead = (props) => {
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

          <data className="card-price" value="2100">{props.projectData.displayName}</data>

          <figure class="card-avatar">
            <img src={props.projectData.avatarUrls["16x16"]} alt="Project" width="48" height="48" />
          </figure>

          <div className="divider card-divider"></div>

          <ul className="revenue-list">

            <li className="revenue-item icon-box">

              <span className="material-symbols-rounded  icon  green">trending_up</span>

              <div>
                <data className="revenue-item-data" value="15">15%</data>

                <p className="revenue-item-text">Prev Week</p>
              </div>

            </li>

            <li className="revenue-item icon-box">

              <span className="material-symbols-rounded  icon  red">trending_down</span>

              <div>
                <data className="revenue-item-data" value="10">10%</data>

                <p className="revenue-item-text">Prev Month</p>
              </div>

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