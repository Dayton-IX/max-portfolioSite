import React, { Component } from 'react';
import UnderConstruction from './underConstruction/underConstruction';
import classes from './Uses.module.css';

class Uses extends Component {
    state = {
        hardActive: true,
        softActive: false,
        drumActive: false
    }

    hardClicked = () => {
        this.setState({hardActive: true, softActive: false, drumActive: false})
    }

    softClicked = () => {
        this.setState({hardActive: false, softActive: true, drumActive: false})
    }

    drumClicked = () => {
        this.setState({hardActive: false, softActive: false, drumActive: true})
    }

    render () {
        return (
            // <UnderConstruction/>
            <div className={classes.Uses}>
                <h1 className={classes.UsesHeader}>/uses</h1>
                <h3 className={classes.UsesSubheader}>A collection of stuff I use to get things done.</h3>
                <div className={classes.UsesNav}>
                    <div className={classes.UsesNavItems}>
                        <button className={this.state.hardActive ? classes.UsesLinkActive : classes.UsesLink} onClick={this.hardClicked}>Hardware</button>
                        <button className={this.state.softActive ? classes.UsesLinkActive : classes.UsesLink} onClick={this.softClicked}>Software</button>
                        <button className={this.state.drumActive ? classes.UsesLinkActive : classes.UsesLink} onClick={this.drumClicked}>Drums</button>
                    </div>
                </div>
            </div>
        )
    }
};

export default Uses;