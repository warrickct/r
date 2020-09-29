import React from 'react';
import styles from './contact.module.scss';

export function Contact() {

    return (
        <div className={styles.contact}>
            <div id="mobile-detail" className={styles.contact_detail}>0274376313</div>
            <div id="email-detail" className={styles.contact_detail}>
                warrickct@gmail.com
        </div>
            <div id="location-detail" className={styles.contact_detail}>
                Auckland, New Zealand
        </div>
            <div id="github-detail" className={styles.contact_detail}>
                github.com/warrickct
        </div>
        </div>
    )
}

export default Contact;