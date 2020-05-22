import React from 'react';
import classes from './underConstruction.module.css';
import { NavLink } from 'react-router-dom';
import WithFade from '../../hoc/Fade/withFade';

const underConstruction = (props) => (
    <div className={classes.underConstruction}>
        <WithFade type="top">
            <div className={classes.ConstructionContainer}>
                <h1 className={classes.ConstructionHeader}>This Part's Not Done Yet!</h1>
                <p className={classes.ConstructionText}>This page is still under construction, check back later to see what hardware, software, accessories, drums, and gear that I use!</p>
                <NavLink className={classes.ConstructionLink} to="/">Back Home</NavLink>
            </div>
        </WithFade>
    </div>
);

export default underConstruction;