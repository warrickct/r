import React from 'react';
import styles from './contact.module.scss';

export function Contact() {

    return (
        <div className={styles.contact}>
            <div className={styles.contact_detail}>+64 0274376313</div>
            <div className={styles.contact_detail}>
                <a className={styles.contactLink} href="mailto:warrickct@gmail.com">warrickct@gmail.com</a>
            </div>
            <div className={styles.contact_detail}>
                Auckland, New Zealand
        </div>
            <div className={styles.contact_detail}>
                <a className={styles.contactLink} href="http://github.com/warrickct">github.com/warrickct</a>
            </div>
        </div>
    )
}

export default Contact;