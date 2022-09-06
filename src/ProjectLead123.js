import React, { Component } from "react";

class ProjectLead extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            leadInfo : {}
        };
    }

    componentDidMount() {
        this.getProjectLeadDetails();
    }

    getProjectLeadDetails = () => {
        fetch('/jira/rest/api/2/project/AMQ')
            .then((response) => response.json())
            .then((data) => {
                //console.log(data);
                this.setState((prevState, props) => ({
                    leadInfo : data
                }));
                console.log(this.state.leadInfo.lead.displayName);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }   
    
    render() {
        return(
            <div>
                Project Name: {this.state.leadInfo.name} [{this.state.leadInfo.key}]
                <br />
                Project Description: {this.state.leadInfo.description}
                <br />
                <br />
                {this.state.leadInfo.lead.displayName}
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
        );
    }

}

export default ProjectLead;