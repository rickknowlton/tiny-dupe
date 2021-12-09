import React from 'react'
import Link from 'next/link';

export default class Footer extends React.Component {
    render() {
        return (
            <footer id="footer"> 
                <div className="footer-bottom">
                    <div className="container"> 
                        <div className="row"> 
                            <div className="col-md-6 col-lg-6"> 
                            <p className="copyright">Copyright 2021 © by <span className="brand">tiny.</span></p>
                            </div>

                            <div className="col-md-6 col-lg-6"> 
                                <ul className="social-links"> 
                                    <li>
                                        <Link href="https://www.instagram.com/teamtinymachine/">
                                                <i className="icofont-instagram"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://www.facebook.com/teamtinymachine">
                                                <i className="icofont-facebook"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
