import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

export default class Services extends React.Component {
    render() {
        return (
            <section id="services" className="awesome-features angle-sp"> 
                <div className="container"> 
                    <div className="row"> 
                        <div className="col-lg-12"> 
                            <ScrollAnimation animateIn="fadeInUp" delay={30} animateOnce={true}>
                                <div className="section-title"> 
                                <h2>Services</h2>
                                <p>tiny provides a whole laundry list of services, but if you don't see what you need below still feel free to reach out. It doesn't hurt to ask!</p>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                    
                    <div className="row"> 
                        <div className="col-md-6 col-lg-6"> 
                            <ScrollAnimation animateIn="fadeInUp" delay={50} animateOnce={true}>
                                <div className="single-feature"> 
                                    <div className="feature-icon">
                                    <i className="icofont-code"></i>
                                    </div>
                                    <h4>Web Development</h4>
                                </div>
                            </ScrollAnimation>
                        </div>
            
                        <div className="col-md-6 col-lg-6"> 
                            <ScrollAnimation animateIn="fadeInUp" delay={100} animateOnce={true}>
                                <div className="single-feature"> 
                                    <div className="feature-icon">
                                    <i className="icofont-smart-phone"></i>
                                    </div>
                                    <h4>Mobile Application Development</h4>
                                </div>
                            </ScrollAnimation>
                        </div>
                        
                        <div className="col-md-6 col-lg-6"> 
                            <ScrollAnimation animateIn="fadeInUp" delay={150} animateOnce={true}>
                                <div className="single-feature"> 
                                    <div className="feature-icon">
                                    <i className="icofont-pixels"></i>
                                    </div>
                                    <h4>Brand Development & Identity</h4>
                                </div>
                            </ScrollAnimation>
                        </div>
                        
                        <div className="col-md-6 col-lg-6"> 
                            <ScrollAnimation animateIn="fadeInUp" delay={200} animateOnce={true}>
                                <div className="single-feature"> 
                                    <div className="feature-icon">
                                    <i className="icofont-megaphone-alt"></i>
                                    </div>
                                    <h4>Digital Marketing</h4>
                                </div>
                            </ScrollAnimation>
                        </div>
                        
                        <div className="col-md-6 col-lg-6"> 
                            <ScrollAnimation animateIn="fadeInUp" delay={250} animateOnce={true}>
                                <div className="single-feature"> 
                                    <div className="feature-icon">
                                    <i className="icofont-shopping-cart"></i>
                                    </div>
                                    <h4>E-Commerce Development</h4>
                                </div>
                            </ScrollAnimation>
                        </div>
                        
                        <div className="col-md-6 col-lg-6"> 
                            <ScrollAnimation animateIn="fadeInUp" delay={300} animateOnce={true}>
                                <div className="single-feature"> 
                                    <div className="feature-icon">
                                        <i className="icofont-speed-meter"></i>
                                    </div>
                                    <h4>Search Engine Optimization</h4>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div> 
            </section>
        )
    }
}
