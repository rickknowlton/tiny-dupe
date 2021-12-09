import '../public/css/bootstrap.min.css';
import '../public/css/animate.css';
import '../public/css/icofont.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import '../public/css/style.css';
import '../public/color/colors.css';
import '../public/css/responsive.css';

import App from 'next/app';
import Head from 'next/head';
import React, { Component } from 'react';
import TagManager from "react-gtm-module";

class MyApp extends App {
    componentDidMount() {
        TagManager.initialize({ gtmId: 'GTM-XXXXXXX' });
        console.log("%c ",
        "display: inline-block ; background-image: url( 'https://static1.squarespace.com/static/6037c9fa956ba770b5e719c4/t/6165d33cd6afc90e1aae35d2/1634063165351/cowboy-man.jpeg' ) ; " +
          "background-size: cover ; padding: 10px 175px 158px 10px ; " +
          "border: 2px solid black ; font-size: 11px ; line-height: 11px ; " +
          "font-family: monospace ;"
          );
        console.log(
        "%cWell howdy there, pard'ner! Didn't see ya there! If you're reading this, welcome to the Netherworld! Lookin' for a site or maybe even a job? Check us out at wearetiny.io!",
        "color: cyan; font-family:courier; font-size: 15px"
        );          
    }

    render () {
        const { Component, pageProps } = this.props
        return (
            <React.Fragment>
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>go tiny. think big.</title>
                </Head>
                <Component {...pageProps} />
            </React.Fragment>
        )
    }
}

export default MyApp