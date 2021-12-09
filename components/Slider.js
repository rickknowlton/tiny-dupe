import React from "react";
import OwlCarousel from "react-owl-carousel3";
import VisibilitySensor from "react-visibility-sensor";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Particles from "react-particles-js";

const options = {
  items: 1,
  nav: true,
  dots: false,
  touchDrag: false,
  mouseDrag: true,
  autoplay: false,
  autoplayHoverPause: true,
  loop: true,
  navText: [
    "<i class='icofont-long-arrow-left'></i>",
    "<i class='icofont-long-arrow-right'></i>",
  ],
};

const particleOpt = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 1000,
      },
    },
    color: {
      value: "#fff",
    },
    size: {
      value: 3,
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
    },
    polygon: {
      nb_sides: 7,
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
    },
    opacity: {
      value: 0.7696377892154509,
      random: true,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 2,
      random: true,
      anim: {
        enable: true,
        speed: 14.617389821424212,
        size_min: 0,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
      distance: 112.2388442605866,
      color: "#ffffff",
      opacity: 0.4,
      width: 10,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: true,
        rotateX: 600,
        rotateY: 1200,
      },
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
      retina_detect: true,
    },
  },
};

class Slider extends React.Component {
  render() {
    return (
      <div
        id="home"
        className="hompage-slides-wrapper gradient-bg angle-slides-wrapper-bg"
      >
        <OwlCarousel
          className="homepage-slides owl-carousel owl-theme"
          {...options}
        >
          {this.props.slideData.map((data, idx) => (
            <div className="single-slider-item" key={idx}>
              <div className="slide-item-table">
                <div className="slide-item-tablecell">
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="col-md-12 col-lg-7">
                        <VisibilitySensor>
                          {({ isVisible }) => (
                            <div className="slider-text">
                              <h1
                                className={
                                  isVisible
                                    ? "animated fadeInUp slow opacityOne"
                                    : ""
                                }
                              >
                                {data.heading}
                              </h1>
                              <p
                                className={
                                  isVisible
                                    ? "animated fadeInUp slow opacityOne"
                                    : ""
                                }
                              >
                                {data.text}
                              </p>
                              <div className="slide-button-container">
                                <a className="animated fadeInUp slow opacityOne">
                                  <AnchorLink
                                    onClick={this.toggleNavbar}
                                    offset={() => 40}
                                    href="#about"
                                    className="slideButton"
                                  >
                                    Learn More
                                  </AnchorLink>
                                </a>
                              </div>
                            </div>
                          )}
                        </VisibilitySensor>
                      </div>

                      <div className="col-md-12 col-lg-5">
                        <div className="welcome-image">
                          <img src="/images/dev4.svg" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </OwlCarousel>
        <Particles params={{ ...particleOpt }} />
      </div>
    );
  }
}

Slider.defaultProps = {
  slideData: [
    {
      heading: "we are tiny.",
      text:
        "We're a small team with big ideas and we're here to help you get to the next level.",
    },
    {
      heading: "we think big.",
      text:
        "We're here to kickass and take names. Head in the clouds, but feet on the ground. Ready for more? Let's do it!",
    },
  ],
};

export default Slider;
