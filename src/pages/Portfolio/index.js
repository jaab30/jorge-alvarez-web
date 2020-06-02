import React, { useState } from "react";
import projectsObj from "../../portfolio.json";
import PortfolioCard from "../../components/PortfolioCard";
import { HashLink as Link } from 'react-router-hash-link';
import "./style.css"

function Portfolio() {

    const [projects, setProjects] = useState(projectsObj);
    const [webToolTitle, setWebToolTitle] = useState("Web Tools");

    const shuffle = (a) => {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    const onSubmit = (x) => {

        let filterTools;
        let shuffleTools = [];
        let webToolTitle = "Web Tools";

        if (x === "all") {
            filterTools = projectsObj;
            setProjects(projectsObj);
            setWebToolTitle(webToolTitle);

        } else {
            filterTools = projectsObj.filter(item => item.webTools.indexOf(x) !== -1)

            shuffleTools = shuffle(filterTools)
            if (x === "HTML5") {
                webToolTitle = "HTML5 / CSS3";
            } else if (x === "NODE") {
                webToolTitle = "NODE / Express";
            } else if (x === "Full CRUD") {
                webToolTitle = "C.R.U.D.";
            } else if (x === "Restful APIs") {
                webToolTitle = "Restful APIs";
            } else {
                webToolTitle = x;
            }
            setProjects(shuffleTools);
            setWebToolTitle(webToolTitle);
        }
    }

    return (
        <section id="portfolio">
            <div className="container">
                <header className="row projectHeaderRow">
                    <div className="col-md-12">
                        <h2>Projects</h2>
                        <h3 className="techTitle">{webToolTitle}</h3>
                    </div>
                </header>
                <div className="row">
                    <div className="col-ms-12 techCol">
                        <img onClick={() => { onSubmit("all") }} className="techIconPort" src="images/tech/asterisk.png" alt="icon" title="ALL PROJECTS" />
                        <img onClick={() => { onSubmit("HTML5") }} className="techIconPort" src="images/tech/html5v1.png" alt="icon" title="HTML5 / CSS3" />
                        <img onClick={() => { onSubmit("JavaScript") }} className="techIconPort" src="images/tech/javascriptv1.png" alt="icon" title="JavdScript" />
                        <img onClick={() => { onSubmit("jQuery") }} className="techIconPort" src="images/tech/jqueryv1.png" alt="icon" title="jQuery" />
                        <img onClick={() => { onSubmit("NODE") }} className="techIconPort" src="images/tech/nodev1.png" alt="icon" title="NODE" />
                        <img onClick={() => { onSubmit("Restful APIs") }} className="techIconPort" src="images/tech/apiv1.png" alt="icon" title="Restful Api" />
                        <img onClick={() => { onSubmit("React") }} className="techIconPort" src="images/tech/reactv1.png" alt="icon" title="React" />
                        <img onClick={() => { onSubmit("PHP") }} className="techIconPort" src="images/tech/php1.png" alt="icon" title="PHP" />
                        <img onClick={() => { onSubmit("Laravel") }} className="techIconPort" src="images/tech/laravel.png" alt="icon" title="Laravel" />
                        <img onClick={() => { onSubmit("Full CRUD") }} className="techIconPort" src="images/tech/crud2.png" alt="icon" title="CRUD" />
                        <img onClick={() => { onSubmit("MySQL") }} className="techIconPort" src="images/tech/mysqlv1.png" alt="icon" title="MySQL" />
                        <img onClick={() => { onSubmit("MongoDB") }} className="techIconPort" src="images/tech/mongodbv1.png" alt="icon" title="MongoDB" />
                    </div>
                </div>
                <div className="row portfolioCont">
                    {projects.map((item, i) => (
                        <PortfolioCard
                            key={i}
                            title={item.title}
                            description={item.description}
                            image={item.image}
                            role={item.role}
                            url={item.url}
                            github={item.github}
                            webTools={item.webTools.join(", ")}
                        />

                    ))}
                </div>
                <div className="arrowUp">
                    <Link to="/#portfolio">
                        <i className="fas fa-arrow-up fa-3x"></i>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Portfolio