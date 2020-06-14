import React from 'react';
import classes from './UsesItem.module.css';

const UsesItem = (props) => {
    
    const icon = props.icon;

    return (
        <div className={classes.UsesItem}>
            {icon}
            <h2 className={classes.UsesItemTitle}>{props.title}</h2>
            <h3 className={classes.UsesItemName}>{props.name}</h3>
            <p className={classes.UsesItemText}>{props.text}</p>
        </div>
    )
};

export default UsesItem;