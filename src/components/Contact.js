import React from 'react';
import './styles.css';

import contactimg from './img/contact-icon.png';
import male from './img/male.png';
import female from './img/female.png';
import none from './img/none.png';

function Contact(props) {

    let gender = props.contact.gender;

    if (props.contact.gender === 'male') {
        gender = male;
    } else if (props.contact.gender === 'female') {
        gender = female;
    } else {
        gender = none;
    }

    return (
        <div className="test">
            <img className="contact-icon-img" src={contactimg} />
            <p id="firstName">{props.contact.firstName} </p>
            <p id="lastName">{props.contact.lastName} </p>
            <p id="phone">{props.contact.phone}</p>
            <img className="gender-img" src={gender} />
        </div>
    )
}

export default Contact;