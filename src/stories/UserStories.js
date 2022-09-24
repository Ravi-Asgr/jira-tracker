import React, { useState, useEffect } from "react";
import { trackPromise } from 'react-promise-tracker';
import { Spinner } from '../spinner/spinner';


const UserStories = (props) => {

    const initialState = {};
    const [issues, setIssues] = useState({});
    const [apiComplete, setApiComplete] = useState(false);
    
    const reqBody = {
        "jql": "project='Data Feed Management' AND assignee = " + props.searchParam.userName + " AND sprint=" + props.searchParam.id + " AND type in (Defect, Story)"
    };
    const apiParam = {
        method: 'POST', 
        body: JSON.stringify(reqBody),
        headers: new Headers({
            'Authorization': 'Bearer MTY4OTQ1NTA1Njk3OkoXi4rU/OGcQYOJXXky5q1zr2lL',
            'Accept': 'application/json',
            'Content-Type': 'application/json' 
        }) 
    };

    const fetchSprintStories = () => {
        setIssues(initialState);
        setApiComplete(false);
        console.log('ssssss ' + JSON.stringify(issues));
        trackPromise (
            fetch('/rest/api/2/search', apiParam)          
                .then((response) => response.json())
                .then(
                    (data) => {
                        console.log(data);
                        setIssues(data);
                        setApiComplete(true);
                    },
                    (err) => {
                        //setIsLoaded(true);
                        //setError(error);
                        console.log(err.message);
                    }
            ) 
        , "issuearea")          
    };

    useEffect(fetchSprintStories, [props]);

    const displaySprintData = () => {
        let sprintDOM;
        if (Object.keys(issues).length > 0 && issues.issues.length > 0) {
            sprintDOM = 
                <div>
                    <div className="section-title-wrapper">
                        <h2 className="section-title"> Issues/Stories for {props.searchParam.userName} </h2>
                    </div>
                    <ul className="tasks-list">
                        {
                          issues.issues.map( (comp, id) => 
                            <li className="tasks-item">
                                <div className="card task-card">
                                    <div className="card-input">
                                        <span>Assignee Email: [{comp.fields.assignee.emailAddress}]</span><br/>
                                        <span>{comp.key} : {comp.fields.summary}</span><br/>
                                        <span>Priority: [{comp.fields.priority.name}]</span><br/>
                                        <span>Status: [{comp.fields.status.name}]</span><br/>
                                        <span>Creator: [{comp.fields.creator.name}]</span><br/>
                                        <span>Created on: [{comp.fields.created}]</span><br/>
                                        <span>Closed on: [{comp.fields.resolutiondate}]</span><br/>
                                        <span>{comp.fields.description}</span><br/>
                                    </div>
                                </div>
                            </li>
                          )
                        }
                    </ul>
                </div>
        } 
        else if (apiComplete && issues.issues.length === 0) {
            sprintDOM =
                <div> No stories assignes to {props.searchParam.userName} in this sprint.</div>
        }
        return sprintDOM;
    }

    return (
        <section className="home" style={{gridTemplateColumns: "3fr"}}>
            <Spinner area="issuearea" />
            {displaySprintData()}
        </section>

    );
}

export default UserStories;