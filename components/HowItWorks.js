import React from 'react';
import Link from 'next/link';
import ScrollAnimation from 'react-animate-on-scroll';
import dynamic from 'next/dynamic';

class HowItWorks extends React.Component {
    state = {
        isOpen: false
    };

    openModal = () => {
        this.setState({isOpen: true})
    };

    render() {
        return (
            <section id="how-it-works" className="how-it-works angle-gray-bg"> 
                <div className="container"> 
                    <div className="row"> 
                        <div className="col-lg-12"> 
                            <ScrollAnimation animateIn="fadeInUp" delay={30} animateOnce={true}>
                                <div className="section-title"> 
                                <h2>Our Process</h2>
                                <p>We take a simple, three-step approach to all of our work and we provide our clients with real-time updates of where we are along the way.</p>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                    
                    <div className="row align-items-center"> 
                        <div className="col-lg-6"> 
                            <div className="hiw-feature-content"> 
                                <ScrollAnimation animateIn="fadeInUp" delay={10} animateOnce={true}>
                                    <div className="single-hiw-feature"> 
                                        <i className="icofont icofont-map"></i>
                                        <h4>Planning & Layout</h4>
                                        <p>We've now dumped all of the pieces on the table and we're sorting them out, putting them together. I guess you could say this is where the magic happens.</p>
                                    </div>
                                </ScrollAnimation>
                                
                                <ScrollAnimation animateIn="fadeInUp" delay={20} animateOnce={true}>
                                    <div className="single-hiw-feature"> 
                                        <i className="icofont icofont-test-tube-alt"></i>
                                        <h4>Design & Development</h4>
                                        <p>We've now dumped all of the pieces on the table and we're sorting them out, putting them together. I guess you could say this is where the magic happens.</p>
                                    </div>
                                </ScrollAnimation>
                                
                                <ScrollAnimation animateIn="fadeInUp" delay={30} animateOnce={true}>
                                    <div className="single-hiw-feature"> 
                                        <i className="icofont-rocket"></i>
                                        <h4>Finalization & Launch</h4>
                                        <p>All systems go! The project is all set and ready to present to you for final inspection. If everything is to your liking we can hit that shiny button and send it out to the world.</p>
                                    </div>
                                </ScrollAnimation>
                            </div>
                        </div>
                        
                        <div className="col-lg-5 offset-lg-1"> 
                            <ScrollAnimation animateIn="fadeInUp" delay={250} animateOnce={true}> 
                                    <img src="/images/dev5.svg" alt="Process" />
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default HowItWorks;