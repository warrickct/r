import React from 'react';
import './contact.component.css'

export function Contact() {

    return (
        <div className="contact">
            <div id="mobile-detail" className="contact__detail">0274376313</div>
            <div id="email-detail" className="contact__detail">
                warrickct@gmail.com
        </div>
            <div id="location-detail" className="contact__detail">
                Auckland, New Zealand
        </div>
            <div id="github-detail" className="contact__detail">
                github.com/warrickct
        </div>
        </div>
    )
}

export default Contact;