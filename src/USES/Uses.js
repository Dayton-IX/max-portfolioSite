import React, { Component } from 'react';
// import UnderConstruction from './underConstruction/underConstruction';
import classes from './Uses.module.css';
import HardwareList from './lists/HardwareList';
import SoftwareList from './lists/SoftwareList';
import GearList from './lists/GearList';
import WithFade from '../hoc/Fade/withFade';

class Uses extends Component {
    state = {
        hardActive: true,
        softActive: false,
        gearActive: false
    }

    hardClicked = () => {
        this.setState({hardActive: true, softActive: false, gearActive: false})
    }

    softClicked = () => {
        this.setState({hardActive: false, softActive: true, gearActive: false})
    }

    gearClicked = () => {
        this.setState({hardActive: false, softActive: false, gearActive: true})
    }

    render () {
        return (
            // <UnderConstruction/>
            <div className={classes.Uses}>
                <WithFade type="left">
                    <h1 className={classes.UsesHeader}>/uses</h1>
                    <h3 className={classes.UsesSubheader}>A collection of stuff I use to get things done.</h3>
                </WithFade>
                <div className={classes.UsesNav}>
                    <div className={classes.UsesNavItems}>
                        <button className={this.state.hardActive ? classes.UsesLinkActive : classes.UsesLink} onClick={this.hardClicked}>Hardware</button>
                        <button className={this.state.softActive ? classes.UsesLinkActive : classes.UsesLink} onClick={this.softClicked}>Software</button>
                        <button className={this.state.gearActive ? classes.UsesLinkActive : classes.UsesLink} onClick={this.gearClicked}>More</button>
                    </div>
                </div>
                <div className={classes.UsesMain} >
                    <WithFade>
                        <div className={classes.UsesItems}>
                            {this.state.hardActive ? <HardwareList /> : this.state.softActive ? <SoftwareList /> : <GearList />}
                        </div>
                    </WithFade>
                </div>
            </div>
        )
    }
};

export default Uses;