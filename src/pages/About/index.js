import React from "react";
import "./style.css"


function About(props) {


    return(
        <section id="about" className="parallaxWrapper">
            <div className="overlay"></div>
            <div className="aboutTitle">
                <p className="h1bio">About Me</p>
            </div>
            <div className="bioDiv">
                <img className="bioImg" src="https://via.placeholder.com/250/09f.png0000FF/808080" alt="John Doe" />
            </div>
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
            </div>
        </section>

    )
}

export default About