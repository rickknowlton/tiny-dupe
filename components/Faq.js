import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

export default class Faq extends React.Component {
    render() {
        return (
            <section id="faqs" className="faqs-section gray-bg"> 
                <div className="container"> 
                    <div className="row"> 
                        <div className="col-lg-12"> 
                            <ScrollAnimation animateIn="fadeInUp" delay={50} animateOnce={true}>
                                <div className="section-title"> 
                                <h2>Frequently Asked Questions</h2>
                                    <p>Got a question? Maybe we have an answer.</p>                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                    
                    <div className="row align-items-center"> 
                        <div className="col-lg-5"> 
                            <ScrollAnimation animateIn="fadeInUp" delay={100} animateOnce={true}>
                                <div className="text-center">
                                    <img src="/images/dev6.svg" alt="Faq Image" />
                                </div>
                            </ScrollAnimation>
                        </div>
                        
                        <div className="col-lg-7"> 
                            <div className="faq-content">
                                <ScrollAnimation animateIn="fadeInUp" delay={150} animateOnce={true}>
                                    <Accordion allowZeroExpanded preExpanded={['a']}>
                                        <AccordionItem uuid="a">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                <span>1.</span> How long will my project take?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                Well, that's a hard one, since every project is different and have their own demands it's not easy to say without a little more info. That said, for something small we could ballpark 4-6 weeks. For something big league it could be 3-4 months. It all depends on the scope!
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="b">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                <span>2.</span>  How much will my project cost?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                Oof! Another hard question! Again, it really depends, but we don't want to waste your time or money and we price our work competitively. Your best bet is to drop us a line and we'll get back to you with a quote.
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="c">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                <span>3.</span>  How are you different from the other guys?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                Well, we're a "collective." We are a multi-headed dragon of awesomeness. We work with designers and developers all over the country to solve whatever problem comes our way. It allows us to work fast and agile because we put the right people behind each project.
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="d">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                <span>4.</span>  My project is kind of nebulous and I'm not sure what I need to get started. How should I proceed?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                While some people approach us with a clear-cut idea, for the most part projects are inherently "messy." That's totally fine and totally normal. If you have an idea that's really all we need to get started. Hit us up!
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="e">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                <span>5.</span>  Are y'all adding more players to the team?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                Pretty much always. If you think you have the chops to bring something to tiny then by all means reach out. We work with developers, designers, illustrators, photographers, copywriters, project managers, and specialists of all sorts. Drop us a line via the contact form below or email us at howdy@teamtinymachine.com.
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                    </Accordion>
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
