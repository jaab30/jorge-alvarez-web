import React from "react";
import "./style.css"
import { Parallax, Background } from 'react-parallax';
 

function About() {
    

    return(

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
                            <h2 className="h2bio">About Me</h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center bottomRowAbout">
                    <div className="col-md-9">
                        <div className="bioTextDiv">
                            <p className="bioText"> A Web developer who has been involved with computers and technology for over
                                20
                                years. I have an
                                extensive background in the education field and dealing with decision making situations on a
                                weekly
                                basis. I believe that good communication is vital for success as well as being able to work
                                individually or with others.<br></br><br></br>
                                I’ve always been captivated by the world of coding and web applications. That’s why I
                                completed
                                the
                                Full Stack Web Developer
                                Coding Bootcamp program at the University of Central Florida. In this program, I’ve
                                strengthened my knowledge in the web development field as well as improving my
                                troubleshooting
                                and
                                problem-solving abilities. I have experience working in environments that are constantly
                                evolving.
                                I’ve learned to adapt to new situations and I’ve been able to excel at the new challenges.!
                            </p>
                            <div className="techImg">
                                <img className="techIcon" src="images/tech/html5v1.png" alt="icon" title="HTML5"/>
                                <img className="techIcon" src="images/tech/css3v1.png" alt="icon" title="CSS3"/>
                                <img className="techIcon" src="images/tech/javascriptv1.png" alt="icon" title="JavdScript"/>
                                <img className="techIcon" src="images/tech/jqueryv1.png" alt="icon" title="jQuery"/>
                                <img className="techIcon" src="images/tech/nodev1.png" alt="icon" title="NODE"/>
                                <img className="techIcon" src="images/tech/expressv1.png" alt="icon" title="Express"/>
                                <img className="techIcon" src="images/tech/ajaxv1.png" alt="icon" title="Ajax"/>
                                <img className="techIcon" src="images/tech/apiv1.png" alt="icon" title="Restful Api"/>
                                <img className="techIcon" src="images/tech/crud.png" alt="icon" title="CRUD"/>
                                <img className="techIcon" src="images/tech/reactv1.png" alt="icon" title="React"/>
                                <img className="techIcon" src="images/tech/jsxv1.png" alt="icon" title="JSX"/>
                                <img className="techIcon" src="images/tech/php1.png" alt="icon" title="PHP"/>
                                <img className="techIcon" src="images/tech/laravel.png" alt="icon" title="Laravel"/>
                                <img className="techIcon" src="images/tech/mysqlv1.png" alt="icon" title="MySQL"/>
                                <img className="techIcon" src="images/tech/mongodbv1.png" alt="icon" title="MongoDB"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        
            </Parallax>

    )
}

export default About