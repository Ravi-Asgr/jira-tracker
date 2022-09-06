import React from "react";

const ProjectMisc = (props) => {
    return (
        <div className="card-wrapper">
            <div className="card task-card">
                <div className="card-icon icon-box green">
                <span className="material-symbols-rounded  icon">task_alt</span>
                </div>

                <div>
                <data className="card-data" value={props.projectData.components.lengt}>{props.projectData.components.length}</data>

                <p className="card-text">Components Count</p>
                </div>

                </div>

            <div className="card task-card">

                <div className="card-icon icon-box blue">
                <span className="material-symbols-rounded  icon">drive_file_rename_outline</span>
                </div>

                <div>
                <data className="card-data" value={props.projectData.issueTypes.length}>{props.projectData.issueTypes.length}</data>

                <p className="card-text">Issue Types Count</p>
                </div>

            </div>
        </div>
    );
}

export default ProjectMisc;