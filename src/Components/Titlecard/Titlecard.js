import React from 'react';
import classes from './Titlecard.module.css';

// import face from '../../assets/20200531_130159.jpg';
import face from '../../assets/face.webp';
import WithFade from '../../hoc/Fade/withFade';

const Titlecard = (props) => (
    <div id="home" className={classes.Titlecard}>
        <div className={classes.Titlecardtext} >
            <WithFade type="left"><h1>Hi, <br /> I'm Maximus.</h1></WithFade>
            {/* <img className={classes.MobileFace} src={face} alt="face" /> */}
            <WithFade type="left">
                <div className={classes.DescriptionBlock}>
                    <div className={classes.Circles}>
                        <span className={classes.Red}></span>
                        <span className={classes.Yellow}></span>
                        <span className={classes.Green}></span>
                    </div>
                    <p>maximus<span className={classes.Equal}> = </span><span className={classes.Bracket}>{'{'}</span></p>
                    <ul>
                        <li>fullName: <span className={classes.Value}>'Maximus Robert Dayton'</span><span className={classes.Comma}>,</span></li>
                        <li>profession: <span className={classes.Value}>'Full Stack Software Engineer'</span><span className={classes.Comma}>,</span></li>
                        <li>specialties: <span className={classes.Value}>'Front-End Development, Back-End Development, Cloud Development, Blockchain Development, DevOps'</span><span className={classes.Comma}>,</span></li>
                        <li>skills: <span className={classes.Value}>'Typescript, React, Next.js, Node.js, AWS, Solidity, React Native'</span><span className={classes.Comma}>,</span></li>
                        <li>yearsOfExperience: <span className={classes.Value}>6</span><span className={classes.Comma}>,</span></li>
                        <li>age: <span className={classes.Value}>20</span></li>
                    </ul>
                    <div className={classes.Semicolon}><span className={classes.Bracket}>{'}'}</span>;</div>
                </div>
            </WithFade>
            <WithFade>
                <a href="/maximus-resume.pdf">
                    Get My Resume!
                </a>
            </WithFade>
        </div>
        <WithFade type="right">
            <div className={classes.imgWrapper}>
                <img className={classes.DesktopFace} src={face} alt="face" />
            </div>
        </WithFade>
    </div>
);

export default Titlecard;