import React from "react";
import { Parallax } from 'react-parallax';
import "./style.css"
import jobsObj from "../../work.json"
import WorkCard from "../../components/WorkCard"

function Work() {

    return (
        <Parallax
            blur={5}
            bgImage={require('./images/codeCheck2.jpg')}
            bgImageAlt="background"
            strength={100}
            className="aboutParallax"
        >
            <div id="work" className="container-fluid workContainer">
                <header className="row workHeaderRow">
                    <div className="col-md-12">
                        <h2>Work</h2>
                    </div>
                </header>
                <section className="row rowDiv">
                    {jobsObj.map((item, i) => (
                        <WorkCard
                            key={i}
                            image1={item.image1}
                            image2={item.image2}
                            title1={item.employer1}
                            title2={item.employer2}
                            subTitle={item.employer_sub}
                            position={item.position}
                            description={item.description}
                        />
                    ))}
                    <div className="col-md-offset-3"></div>
                </section>
            </div>
        </Parallax>

    )
}

export default Work