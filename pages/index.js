import React from "react";
import { Preloader, Placeholder } from "react-preloading-screen";
import NoSSR from "react-no-ssr";
import Navigation from "../components/Navigation";
import Loader from "../components/Loader";
import Slider from "../components/Slider";
import About from "../components/About";
import HowItWorks from "../components/HowItWorks";
import Services from "../components/Services";
import Faq from "../components/Faq";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

class Index extends React.Component {
  render() {
    return (
      <NoSSR key="1">
          
        <Preloader fadeDuration={1000}>

          <Navigation />

          <Slider />

          <About />

          <HowItWorks />

          <Services />

          <Faq />

          <ContactForm />

          <Footer />

          <Placeholder>
            <Loader />
          </Placeholder>

        </Preloader>

      </NoSSR>
    );
  }
}

export default Index;
