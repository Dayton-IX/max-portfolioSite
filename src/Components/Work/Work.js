import React from 'react';
import classes from './Work.module.css';

import WorkItem from './WorkItem/WorkItem';

const Work = (props) => {
    const workItems = {
        CentralValleyFoods: {
            title: 'Central Valley Foods',
            text: 'An ecommerce site for farm products, utilizing online shopping features like a cart, order form, and credit card checkout.',
            tech: ['react', 'redux', 'js', 'node'],
            link: 'centralvalleyfoods.net',
            id: 'CentralValleyFoods'
        }
    }   

    return (
        <div id="work" className={classes.Work}>
            <h1 className={classes.WorkHeader}>My Work.</h1>
            <div className={classes.WorkItems}>
                <WorkItem project={workItems.CentralValleyFoods} />
            </div>
        </div>
    )
};

export default Work;