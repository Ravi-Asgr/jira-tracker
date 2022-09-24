import React, { useState, useEffect } from "react";
import { trackPromise } from 'react-promise-tracker';
import { Spinner } from './spinner/spinner';
import UserStories from './stories/UserStories';


const UserSearch = (props) => {

    const initialState = {};
    const [sprint, setSprint] = useState({});
    const [apiComplete, setApiComplete] = useState(false);
    const [showIssues, setShowIssues] = useState(false);
    const [issueSearchParam, setIssueSearchParam] = useState({});
    console.log('ActiveSprint.js prop user name: ' + props.userName);
    
    const apiParam = {
        method: 'GET', 
        headers: new Headers({
            'Authorization': 'Bearer MTY4OTQ1NTA1Njk3OkoXi4rU/OGcQYOJXXky5q1zr2lL' 
        }) 
    };

    const fetchCurrentSprint = () => {
        setSprint(initialState);
        setIssueSearchParam(initialState);
        setApiComplete(false);
        setShowIssues(false);
        trackPromise (
            fetch('/rest/agile/1.0/board/' + props.userInfo.id + '/sprint?&state=active', apiParam)          
                .then((response) => response.json())
                .then(
                    (data) => {
                        console.log(data);
                        setSprint(data);
                        setApiComplete(true);
                    },
                    (err) => {
                        //setIsLoaded(true);
                        //setError(error);
                        console.log(err.message);
                    }
            ) 
        , "sprintarea")          
    };

    useEffect(fetchCurrentSprint, [props]);

    const setSprintSearchParams = (param) => {
        setShowIssues(true);
        var obj = {};
        obj["userName"] = props.userName;
        obj["id"] = param.id;
        setIssueSearchParam(obj);
    }

    const displaySprintData = () => {
        let sprintDOM;
        if (Object.keys(sprint).length > 0 && sprint.values.length > 0) {
            sprintDOM = 
                <section className="home" style={{gridTemplateColumns: "1.25fr 1.25fr"}}>
                {
                    sprint.values.map( (comp, id) => 
                        <div key={id} className="card profile-card">
                            
                            <div className="profile-card-wrapper">
                                <div>
                                    <p className="card-title">Sprint Name: {comp.name}</p>
                                </div>               
                                
                                <ul className="contact-list">
                                    <li>
                                        <p className="contact-link icon-box text">Start Date: {comp.startDate}</p>
                                        <br />
                                        <p className="contact-link icon-box text">End Date: {comp.endDate}</p>
                                        <br />
                                        <p className="contact-link icon-box text">Status: {comp.state}</p>
                                        <br/>
                                        <p><input type="button" className="btn btn-primary active" value="My Issues" onClick={() => setSprintSearchParams(comp)}></input></p>
                                    </li>
                                </ul>
                            </div> 
                            
                            <div className="divider card-divider"></div>
                            <div>
                                {comp.goal}
                            </div>  
                        </div>
                    )    
                }
                </section>
        } 
        else if (apiComplete && sprint.values.length === 0) {
            sprintDOM =
            <section className="home" style={{gridTemplateColumns: "1.25fr 1.25fr"}}>
                <div> No active sprints found for this Board.</div>
            </section>
        }
        return sprintDOM;
    }

    return (
        <><section className="home">
            <div className="card task-card" style={{background: "none", boxShadow: "none", paddingLeft: "0px"}}>
                <div className="card-input section-title">
                    Current active sprints for Board: <label className="card-badge cyan radius-pill">{props.userInfo.name}</label>
                </div>
            </div>
        </section>
        <Spinner area="sprintarea"/>
        {displaySprintData()}
        { showIssues && sprint && Object.keys(sprint).length > 0 && (<UserStories searchParam={issueSearchParam} />) }    
        
        </>

    );
}

export default UserSearch;