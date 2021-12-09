import React, { useState } from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import axios from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)
import baseUrl from '../utils/baseUrl'

const alertContent = () => {
    MySwal.fire({
        title: 'Message Sent!',
        text: 'Thanks! We will get back to you ASAP!',
        icon: 'success',
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false,
    })
}

// Form initial state
const INITIAL_STATE = {
    name: "",
    email: "",
    number: "",
    subject: "",
    text: ""
};

const ContactForm = () => {

    const [contact, setContact] = useState(INITIAL_STATE);

    const handleChange = e => {
        const { name, value } = e.target;
        setContact(prevState => ({ ...prevState, [name]: value }));
        // console.log(contact)
    }

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const url = `${baseUrl}/api/contact`;
            const { name, email, number, subject, text } = contact;
            const payload = { name, email, number, subject, text };
            const response = await axios.post(url, payload);
            console.log(response);
            setContact(INITIAL_STATE);
            alertContent();
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <section id="contact" className="contact-section gray-bg">
            <div className="container">
                <div className="row"> 
                    <div className="col-lg-12"> 
                        <ScrollAnimation animateIn="fadeInUp" delay={50} animateOnce={true}>
                        <div className="section-title"> 
                                    <h2>Holler at Us</h2>
                                    <p>Have a question? Have an idea? Just want to share your favorite recipe for mac & cheese? Drop us a line below!</p>
                                </div>
                        </ScrollAnimation>
                    </div>
                </div>

                <div className="row"> 
                    
                    <div className="col-md-6 col-lg-6"> 
                        <div className="single-contact-info">
                            <ScrollAnimation animateIn="fadeInUp" delay={150} animateOnce={true}>
                                <i className="icofont-envelope"></i>
                                <h3>e-mail</h3>
                                    <p>howdy@wearetiny.io</p>
                            </ScrollAnimation>
                        </div>
                    </div> 

                    <div className="col-md-6 col-lg-6"> 
                        <div className="single-contact-info">
                            <ScrollAnimation animateIn="fadeInUp" delay={200} animateOnce={true}>
                                <i className="icofont icofont-phone"></i>
                                <h3>phone</h3>
                                    <p>‪‪(717) 478-1311‬</p>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="contact-form">
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input 
                                                type="text" 
                                                name="name" 
                                                placeholder="Name" 
                                                className="form-control" 
                                                value={contact.name}
                                                onChange={handleChange} 
                                                required 
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input 
                                                type="text" 
                                                name="email" 
                                                placeholder="Email" 
                                                className="form-control" 
                                                value={contact.email}
                                                onChange={handleChange} 
                                                required 
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input 
                                                type="text" 
                                                name="number" 
                                                placeholder="Phone number" 
                                                className="form-control" 
                                                value={contact.number}
                                                onChange={handleChange} 
                                                required 
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input 
                                                type="text" 
                                                name="subject" 
                                                placeholder="Subject" 
                                                className="form-control" 
                                                value={contact.subject}
                                                onChange={handleChange} 
                                                required 
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <textarea 
                                                name="text" 
                                                cols="30" 
                                                rows="6" 
                                                placeholder="Write your message..." 
                                                className="form-control" 
                                                value={contact.text}
                                                onChange={handleChange} 
                                                required 
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-sm-12 text-center">
                                        <button type="submit" className="default-button">
                                            Send Message 
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactForm;