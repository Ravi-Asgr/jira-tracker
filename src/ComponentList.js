import React, { Component }  from "react";

const ComponentList = (props) => {
    return (
        <section class="tasks">
            <div class="section-title-wrapper">
                <h2 class="section-title">Components</h2>
            </div>

            <ul class="tasks-list">
                {props.projectData.map( (comp, id) => 

                <li class="tasks-item">
                    <div class="card task-card">
                        <div class="card-input">
                            <input type="checkbox" name="task-1" id="task-1" />
                            {comp.description}
                            <label for="task-1" class="task-label">
                                
                            </label>
                        </div>

                        <div class="card-badge cyan radius-pill">{comp.name}</div>

                        <ul class="card-meta-list">
                            <li>
                                <div class="meta-box icon-box">
                                    <span class="material-symbols-rounded  icon">list</span>

                                    <span>3/7</span>
                                </div>
                            </li>

                            <li>
                                <div class="meta-box icon-box">
                                    <span class="material-symbols-rounded  icon">comment</span>

                                    <data value="21">21</data>
                                </div>
                            </li>                           

                            <li>
                                <div class="card-badge red">High</div>
                            </li>
                        </ul>
                    </div>
                </li>
                )
                }
            </ul>
        </section>
    );
}

export default ComponentList;
