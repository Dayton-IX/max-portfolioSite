import React, { Component } from 'react';

import classes from './Layout.module.css';

class Layout extends Component {
    render() {
        return (
            <div className={classes.Layout}>
                <h1>COVID-19 Tracker</h1>
                <h2>Data from <a href="https://coronavirus.jhu.edu/" target="blank">Johns Hopkins</a></h2>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
};

export default Layout;