import React from 'react';
import classes from './WorkItem.module.css';

const WorkItem = (props) => {
    return (
        <div id={props.project.id} className={classes.WorkItem} >
            <div className={classes.WorkItemBackground}>
                <h4 className={classes.WorkItemHeader}>{props.project.title}</h4>
                <p className={classes.WorkItemText}>{props.project.text}</p>
                <span className={classes.WorkItemTech}>Built Using: </span>
            </div>
        </div>
    )
};

export default WorkItem;