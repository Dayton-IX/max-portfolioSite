import React, { Component } from 'react';

import classes from './Layout.module.css';

class Layout extends Component {
    render() {
        return (
            <div className={classes.Layout}>
                <h1>COVID-19</h1>
                <h2>Coronavirus</h2>
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
};

export default Layout;