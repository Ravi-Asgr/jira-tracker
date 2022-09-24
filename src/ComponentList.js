import React, { useState, useEffect }  from "react";
import { trackPromise } from 'react-promise-tracker';
import { Spinner } from './spinner/spinner';
import ActiveSprint from "./ActiveSprint";

const ComponentList = (props) => {

    const [projectBoard, setprojectBoard] = useState([]);
    const [apiComplete, setApiComplete] = useState({});
    //var userData = [];
    const [refVar, setRefVar] = useState(false);
    const [userData, setUserData] = useState([]);

    //var refVar = false; 
    
    const apiParam = {
        method: 'GET', 
        headers: new Headers({
            'Authorization': 'Bearer MTY4OTQ1NTA1Njk3OkoXi4rU/OGcQYOJXXky5q1zr2lL' 
        }) 
      };

    const fetchBoard = () => {
        console.log("caling board api");
        fetch('/rest/agile/1.0/board?name=DFM', apiParam)
            .then((response) => response.json())
            .then(
                (data) => {
                    console.log("got response from board api");
                    console.log('board data '+data);
                    setprojectBoard(data);
                    trackPromise (
                        getBoardData(data)
                    )
                },
                (err) => {
                    //setIsLoaded(true);
                    //setError(error);
                    console.log(err.message);
                }
            )  
    };

    // const getBoardData = async (boardObject) => {

    //     console.log(JSON.stringify(boardObject));
    //     console.log("caling board issue api ");
    //     boardObject.map(  (board) => {
    //         console.log("calling api: " + board.self);
    //         const ab = await fetch('/rest/agile/1.0/board/383/issue', apiParam);
    //         console.log("got response calling api: " + board.self);
    //         const cd = await ab.json();
    //         board["count"] = cd.total;
    //         console.log(JSON.stringify(board));
    //     });
    //     setApiComplete(boardObject);
    //     console.log("completed caling board issue api ");
    // }

    //sync call
    async function getBoardData(boardObject) {

        console.log(JSON.stringify(boardObject));
        console.log("caling board issue api ");
        for (const board of boardObject.values) {
            console.log("calling api: " + board.self);
            var boardId = board.self.split("https://ie-jira.vocalink.co.uk/rest/agile/1.0/board/")[1];
            var ab = await fetch('/rest/agile/1.0/board/' + boardId + '/issue', apiParam);
            console.log("got response calling api: " + board.self);
            const cd = await ab.json();
            board["count"] = cd.total;
            console.log(JSON.stringify(board));
            break;
        }
        //apiComplete = true;
        setApiComplete(boardObject);
        console.log("object data : " + userData);
        console.log("boolean value is: " + refVar);
        //setUserSearch(boardObject.values[0]);
        setRefVar(true);
        setUserData(boardObject.values[0]);
        console.log("object data : " + userData)
        console.log("completed caling board issue api " + refVar);
    }

    //async all
    const getSome = (boardObject) => {
        console.log(JSON.stringify(boardObject));
        console.log("caling board issue api");
        let promises = [];
        for (let i = 0; i < boardObject.values.length; i++) {
            promises.push(fetch('/rest/agile/1.0/board/383/issue', apiParam));
        }
        
        Promise.all(promises)
            .then(function (responses) {
                // Get a JSON object from each of the responses
                return Promise.all(responses.map(function (response) {
                    return response.json();
                }));
            })
            .then( (data) => {
                console.log("got response from board issue api");
                console.log(data);
            });
    }

    useEffect(fetchBoard, []);

    const  passBoardToSearch = (value) => {
       setUserData(value);
    }

    return (
        <>
            <section className="tasks" ref={props.boardLink}>
                <div className="section-title-wrapper">
                    <h2 className="section-title">Project Boards</h2>
                    <Spinner />
                </div>    
                {
                    refVar && (
                        <div>
                            <ul className="tasks-list">
                                {apiComplete.values.map( (comp, id) => 

                                    <li className="tasks-item" key={id}>
                                        <div className="card task-card">
                                            <div className="card-input">
                                                <input type="checkbox" name="task-1" id="task-1" onClick={() => passBoardToSearch(comp)} />
                                                {comp.type}
                                                <label htmlFor="task-1" className="task-label">
                                                    
                                                </label>
                                            </div>

                                            <div className="card-badge cyan radius-pill">{comp.name}</div>

                                            <ul className="card-meta-list">
                                                <li>
                                                    <div className="meta-box icon-box">
                                                        <span className="material-symbols-rounded  icon">list</span>

                                                        <span>3/7</span>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="meta-box icon-box">
                                                        <span className="material-symbols-rounded  icon">comment</span>

                                                        <data value={comp.count}>{comp.count}</data>
                                                    </div>
                                                </li>                           

                                                <li>
                                                    <div className="card-badge red">Issues</div>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                )
                                }
                            </ul>
                            
                        </div>
                    )
                }
            </section>
            {
                refVar && (
                    <ActiveSprint userInfo = {userData} userName = {props.userName} />
                )
            }
        </>
    );

    
}

export default ComponentList;
