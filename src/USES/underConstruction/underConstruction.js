import React from 'react';
import classes from './underConstruction.module.css';
import { NavLink } from 'react-router-dom';

const underConstruction = (props) => (
    <div className={classes.underConstruction}>
        <h1 className={classes.ConstructionHeader}>This Part's Not Done Yet!</h1>
        <p className={classes.ConstructionText}>This page is still under construction, check back later to see what hardware, software, accessories, drums, and gear that I use!</p>
        <NavLink to="/">Back Home</NavLink>
    </div>
);

export default underConstruction;