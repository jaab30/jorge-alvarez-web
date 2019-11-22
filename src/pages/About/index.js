import React from "react";
import "./style.css"
// import { Parallax } from 'react-scroll-parallax';
// import { Parallax } from 'react-scroll-parallax';
import { Parallax, Background } from 'react-parallax';
 

function About(props) {
    

    return(

        <Parallax
            blur={1}
            bgImage={require('./images/contact.jpg')}
            bgImageAlt="background"
            strength={1000}
            className="aboutParallax"
        >
            <section id="about">
                    {/* <img className="imgAbout" src="/images/code.jpg"/> */}
                <div className="overlay"></div>
                <div className="overlay2"></div>
                <div className="aboutTitle">
                    <h2 className="h2bio">About Me</h2>
                </div>
                
                <Background className="bioDiv">
                    <img className="bioImg" src="/images/JA_Profile_Pix.jpg" alt="Profile Pix" />
                </Background>
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
                        <img className="techIcon" src="/images/tech/html5v1.png"/>
                        <img className="techIcon" src="/images/tech/css3v1.png"/>
                        <img className="techIcon" src="/images/tech/javascriptv1.png"/>
                        <img className="techIcon" src="/images/tech/jqueryv1.png"/>
                        <img className="techIcon" src="/images/tech/nodev1.png"/>
                        <img className="techIcon" src="/images/tech/expressv1.png"/>
                        <img className="techIcon" src="/images/tech/ajaxv1.png"/>
                        <img className="techIcon" src="/images/tech/apiv1.png"/>
                        <img className="techIcon" src="/images/tech/crud.png"/>
                        <img className="techIcon" src="/images/tech/reactv1.png"/>
                        <img className="techIcon" src="/images/tech/jsxv1.png"/>
                        <img className="techIcon" src="/images/tech/php1.png"/>
                        <img className="techIcon" src="/images/tech/laravel.png"/>
                        <img className="techIcon" src="/images/tech/mysqlv1.png"/>
                        <img className="techIcon" src="/images/tech/mongodbv1.png"/>
                    </div>
                </div>

            <div style={{ height: '1000px' }} />
            </section>
        
            </Parallax>

    )
}

export default About