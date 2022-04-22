import React from "react";
import "./style.css"
import { Parallax, Background } from 'react-parallax';


function About() {

    return (

        <Parallax
            blur={10}
            bgImage={require('./images/code3Check.jpg')}
            bgImageAlt="background"
            strength={500}
            className="aboutParallax"
        >
            <section className="container-fluid" id="about">

                <div className="row topRowAbout">
                    <div className="col-md-12 text-center">
                        <Background className="bioDiv">
                            <img className="bioImg" src="images/JA_Profile_Pix.jpg" alt="Profile Pix" />
                        </Background>
                        <div className="aboutTitle">
                            <h2 className="h2bio">About Me TESTING</h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center bottomRowAbout">
                    <div className="col-md-9">
                        <div className="bioTextDiv">
                            <p className="bioText"> A forward-thinking Full Stack Web Developer with a proven work ethic and unfailing dependability, specialized in JavaScript, React, Redux and the MERN Stack. <br></br>
                            Dedicated enthusiast who mentors and trains Full Stack Web Developer students to achieve their goals of becoming successful developers.<br></br>
                            Passionate about learning and coding, with a desire to apply skills on an enterprise level. Eager to join a team to tackle more complex problems and deliver high quality development solutions.
                            </p>
                            <div className="techImg">
                                <img className="techIcon" src="images/tech/html5v1.png" alt="icon" title="HTML5" />
                                <img className="techIcon" src="images/tech/css3v1.png" alt="icon" title="CSS3" />
                                <img className="techIcon" src="images/tech/javascriptv1.png" alt="icon" title="JavdScript" />
                                <img className="techIcon" src="images/tech/jqueryv1.png" alt="icon" title="jQuery" />
                                <img className="techIcon" src="images/tech/nodev1.png" alt="icon" title="NODE" />
                                <img className="techIcon" src="images/tech/expressv1.png" alt="icon" title="Express" />
                                <img className="techIcon" src="images/tech/ajaxv1.png" alt="icon" title="Ajax" />
                                <img className="techIcon" src="images/tech/apiv1.png" alt="icon" title="Restful Api" />
                                <img className="techIcon" src="images/tech/crud.png" alt="icon" title="CRUD" />
                                <img className="techIcon" src="images/tech/reactv1.png" alt="icon" title="React" />
                                <img className="techIcon" src="images/tech/jsxv1.png" alt="icon" title="JSX" />
                                <img className="techIcon" src="images/tech/php1.png" alt="icon" title="PHP" />
                                <img className="techIcon" src="images/tech/laravel.png" alt="icon" title="Laravel" />
                                <img className="techIcon" src="images/tech/mysqlv1.png" alt="icon" title="MySQL" />
                                <img className="techIcon" src="images/tech/mongodbv1.png" alt="icon" title="MongoDB" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </Parallax>

    )
}

export default About