import React, { Component } from 'react';

import classes from './Layout.module.css';
import WithFade from '../../hoc/Fade/withFade';

class Layout extends Component {
    render() {
        return (
            <div className={classes.Layout}>
                <WithFade type="top">
                    <h1>COVID-19 Tracker</h1>
                    <h2>Data from <a href="https://coronavirus.jhu.edu/" target="blank">Johns Hopkins</a></h2>
                </WithFade>
                <WithFade >
                    <div>
                        {this.props.children}
                    </div>
                </WithFade>
            </div>
        )
    }
};

export default Layout;