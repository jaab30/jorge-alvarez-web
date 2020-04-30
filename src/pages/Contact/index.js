import React from "react";
import "./style.css"


function Contact(props) {

    return (
        <section id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="contactTitle">Contact<span className="contactTitleSub"> Me</span></h1>
                    </div>
                    <div className="col-12 subtitleDiv">
                        <h2 className="contactSubTitle">
                            This is how you can reach me...
                        </h2>
                    </div>
                    <div className="col-12">
                        <div className="row">
                            <div className="col-12 contactInfoCol">
                                <span className="mailIcon"><i className="far fa-envelope fa-3x"></i></span><a href="mailto:jorge.alvarez.web@gmail.com" target="_blank" rel="noopener noreferrer">
                                    jorge.alvarez.web@gmail.com</a>
                            </div>
                            <div className="col-12 contactInfoCol">
                                <span className="phoneIcon"><i className="fas fa-mobile-alt fa-3x"></i></span> <span className="phoneText">(407) 690-2241</span>
                            </div>
                            <div className="col-12 contactInfoCol">
                                <span className="phoneIcon"><i className="fas fa-street-view fa-3x"></i></span> <span className="phoneText">PO Box 679556, Orlando - FL 32867</span>
                            </div>
                            <div className="col-12 contactInfoCol webLinksDiv">
                                <a className="linkedInLink" href="https://www.linkedin.com/in/jalvarez1" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin fa-2x"></i></a>
                                <a className="gitHubLink" href="https://github.com/jaab30" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square fa-2x"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Contact