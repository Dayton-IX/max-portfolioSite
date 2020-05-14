import React, { Component } from 'react';
import classes from './Contact.module.css';

class Contact extends Component {
    render() {
        return (
            <div id="contact" className={classes.Contact}>
                <h1 className={classes.ContactHeader}>Get In Touch.</h1>
                <div className={classes.ContactMain}>
                    <div className={classes.ContactLeft}>
                        <div className={classes.ContactFormContainer}>
                            <form className={classes.ContactForm}>
                                <input type="text" placeholder="Name" />
                                <input type="text" placeholder="Email" />
                                <textarea placeholder="Message" />
                                <input type="submit" value="Send Me An Email!" />
                            </form>
                            <div className={classes.FollowMe}>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Contact;