import React from "react";
import "./style.css"


function Work(props) {


    return(

        <section id="work" className="parallaxWrapper">
            <div className="workTitle">
                <p className="hOneWork">Work</p>
            </div>
            <div className="job job-1">
                <h3>TRILOGY EDUCATION</h3>
                <h4>University of Central Florida Coding Bootcamp</h4>
                <hr></hr>
                <h5>Teacher Assistant - Full Stack Web Development Program</h5>
                <ul>
                    <li>Provide support and guidance to the students attending UCF's Full Stack Web
                        Development Program.
                    </li>
                    <li>Reinforce lesson material presented by lead Instructor by helping students with
                        questions and
                        reviewing material one-on-one or in small groups.</li>
                    <li>Teach class material to students as well as lead class reviews and discussions.</li>
                    <li>Help students with troubleshooting and debugging computer and coding issues.</li>
                    <li>Provide record keeping, such as tracking attendance and grading homework
                        assignments.</li>
                </ul>
            </div>
            <div className="job job-2">
                <h3>FULL SAIL UNIVERSITY</h3>
                <br></br>
                <hr></hr>
                <h5>Instructor - Lab Specialist </h5>
                <ul>
                    <li>Recognized by Program Director for leading students to successfully complete class
                        objectives.
                    </li>
                    <li>Assist and helps over 200 students monthly with equipment and software set up as
                        well as
                        implementing troubleshooting techniques to solve computer and/or software issues.
                    </li>
                    <li>Assist in developing lesson plans based on state requirements and the specific needs
                        of the
                        students.</li>
                    <li>Assist with classroom instruction and provide support and guidance to students.</li>
                </ul>
            </div>
            <div className="job job-3">
                <h3>YRS MIDI Systems</h3>
                <br></br>
                <hr></hr>
                <h5>Software Support / Web</h5>
                <ul>
                    <li>Creation, design and maintenance of Store Web Page. </li>
                    <li>Keep all web content up to date ( ie. new inventory, prices, product availability,
                        etc ).</li>
                    <li>Responsible for installation, maintenance and support of software applications.</li>
                    <li>Responsible for instructing clients on how to utilize new software applications and
                        how to
                        apply troubleshooting techniques to solve software issues.</li>
                </ul>
            </div>
        </section>

    )
}

export default Work