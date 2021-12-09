import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import AnchorLink from "react-anchor-link-smooth-scroll";

class About extends React.Component {
  render() {
    return (
      <section id="about" className="app-about-section angle-sp">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <ScrollAnimation
                animateIn="fadeInUp"
                delay={20}
                animateOnce={true}
              >
                <div className="section-title angle-section-title">
                  <h2>About tiny.</h2>
                  <p>
                    At tiny we take a collaborative appoach to all of our work.
                    We're plugged in with designers, developers, brand
                    stategists, and creatives around the globe, working together
                    to bring your big ideas to life.
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-7">
              <ScrollAnimation
                animateIn="fadeInUp"
                delay={50}
                animateOnce={true}
              >
                <div className="app-about-text">
                  <h3>No Project is Too Big for tiny.</h3>
                  <p>
                    We're here to help transform your dreams into reality.
                    Nothing is too big nor too small. Whether you need something
                    as simple as a new logo or you're trying to get your mobile
                    application off the ground – tiny can help.
                  </p>
                  <p>
                    Our process and workflow is unique, cutting edge and agile.
                    We're a collective and we can borrow from our overall
                    experience to build things faster and smarter. We may be
                    tiny, but we are fierce.
                  </p>

                  <a>
                    <AnchorLink
                      onClick={this.toggleNavbar}
                      offset={() => 40}
                      className="default-button"
                      href="#contact"
                    >
                      Work With Us
                    </AnchorLink>
                  </a>
                </div>
              </ScrollAnimation>
            </div>

            <div className="col-lg-5">
              <ScrollAnimation
                animateIn="fadeInUp"
                delay={100}
                animateOnce={true}
              >
                <div className="text-center">
                  <img src="/images/dev2.svg" alt="App About Image" />
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
