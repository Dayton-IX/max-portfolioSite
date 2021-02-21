import React from 'react';
import classes from './Work.module.css';

import WorkItem from './WorkItem/WorkItem';
import WithFade from '../../hoc/Fade/withFade';

const Work = (props) => {

    const workItems = [
        {
            title: 'Idea Makers',
            text: 'Idea Makers is a full stack product development firm that can turn any Idea into a reality! I redesigned and revamped their website!',
            link: 'https://ideamakersinc.com',
            linkName: 'ideamakersinc.com',
            id: 'IdeaMakers'
        },
        {
            title: 'Central Valley Foods',
            text: 'An ecommerce site for farm products, utilizing online shopping features like a cart, order form, and credit card checkout.',
            link: 'https://centralvalleyfoods.net',
            linkName: 'centralvalleyfoods.net',
            id: 'CentralValleyFoods'
        },
        {
            title: 'The Schwab Bakery',
            text: 'A stylish site for The Schwab Bakery, a small bakery in Smithfield Utah.',
            link: 'https://www.schwabbakery.com',
            linkName: 'schwabbakery.com',
            id: 'SchwabBakery'
        },
        {
            title: 'Veteran Lawncare',
            text: 'I helped with the some of the design, and implemented some payment features into this Squarespace site.',
            link: 'https://www.veteranlawncareandsprinklers.com',
            linkName: 'veteranlawncareandsprinklers.com',
            id: 'VeteranLawncare'
        },
        {
            title: 'Neumorphic Watch Face',
            text: 'I created and published a watch face for the Samsung Galaxy Watch using web technologies to prototype it.',
            link: '',
            linkName: 'Web Version',
            id: 'GalaxyWatch'
        },
        {
            title: 'COVID-19 Tracker',
            text: 'A web app to track the amount of confirmed cases, deaths, and recoveries from COVID-19. Scrapes data from Johns Hopkins.',
            link: '/covid19-tracker',
            linkName: '/covid19-tracker',
            id: 'CovidTracker'
        }
    ];

    const workHistory = [
        {
            title: 'Senior Software Engineer / Project Team Lead',
            employer: 'Sapa Investment Group',
            startDate: 'November 2020',
            endDate: 'Present',
            description: 'I am working as a senior full-stack React web application and React Native mobile application developer. I am also leading a team of designers and developers on the development of multiple large scale mobile applications.',
        },
        {
            title: 'Freelance Full Stack Developer',
            employer: 'Dayton Web Development',
            startDate: 'June 2019',
            endDate: 'Present',
            description: 'I work as a freelance web and mobile application developer, creating a variety of applications and software for clients.'
        }
    ]

    return (
        <div id="work" className={classes.Work}>
            <h1 className={classes.WorkHeader}>My Work.</h1>
            <div className={classes.WorkItems}>
                {workItems.map(workItem => (
                    <WorkItem  key={workItem.title} project={workItem} />
                ))}
            </div>
            <WithFade type="left">
                <div className={classes.workHistory}>
                    <h2 className={classes.workHistoryHeader}>Work History.</h2>
                    <div className={classes.workHistoryItems}>
                        {workHistory.map(job => (
                            <div key={job.title} className={classes.job}>
                                <h4 className={classes.jobTitle}>{job.title}</h4>
                                <h5 className={classes.jobEmployer}>{job.employer} ● {job.startDate} - {job.endDate}</h5>
                                {/* <p className={classes.jobTimeFrame}>{job.startDate} - {job.endDate}</p> */}
                                <p className={classes.jobDescription}>{job.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </WithFade>
        </div>
    )
};

export default Work;