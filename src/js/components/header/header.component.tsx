import React from 'react';
import styles from './header.module.scss';

export function Header() {
    return (
        <div className={styles.banner}>
                <h1 className={styles.banner__title} id="name">Warrick Corfe-Tan<span className={styles.blink}>|</span></h1>
        </div>
    )
}

export default Header;