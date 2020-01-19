import React from "react";
import projectsObj from "../../portfolio.json"
import PortfolioCard from "../../components/PortfolioCard"
import "./style.css"


class Portfolio extends React.Component {

    state =  {
        projects: projectsObj,
        webToolTitle: "Web Tools"
    }
    
    onSubmit = (x) => {
        // this.setState({
        //     projects: projectsObj
        // }   )
        
            let filterTools = "";
            let webToolTitle = "";
            filterTools = projectsObj.filter(item => item.webTools.indexOf(x) !== -1)
            if (x === "HTML5"){
                webToolTitle = "HTML5 / CSS3";
            } else if (x === "NODE"){
                webToolTitle = "NODE / Express";
            } else if (x === "Full_CRUD"){
                webToolTitle = "C.R.U.D.";
            } else {
                webToolTitle = x;
            }


        this.setState({
            projects: filterTools,
            webToolTitle: webToolTitle
            }) 
    }
    
    render(){
        console.log(this.state.projects)
        
        // webToolsSplit = this.state.projects.webTools.join(", ")
        return(
            <section id="portfolio">
                <div className="container">
                    <header className="row projectHeaderRow">
                        <div className="col-md-12">
                            <h2>Projects</h2>
                            <h3 className="techTitle">{this.state.webToolTitle}</h3>
                        </div>  
                    </header>
                    <div className="row">
                        <div className="col-ms-12 techCol">
                            <img onClick={() => {this.onSubmit("HTML5")}} className="techIconPort" src="/images/tech/html5v1.png" alt="icon" title="HTML5 / CSS3"/>
                            <img onClick={() => {this.onSubmit("JavaScript")}} className="techIconPort" src="/images/tech/javascriptv1.png" alt="icon" title="JavdScript"/>
                            <img onClick={() => {this.onSubmit("jQuery")}} className="techIconPort" src="/images/tech/jqueryv1.png" alt="icon" title="jQuery"/>
                            <img onClick={() => {this.onSubmit("NODE")}} className="techIconPort" src="/images/tech/nodev1.png" alt="icon" title="NODE"/>
                            <img onClick={() => {this.onSubmit("Restful_APIs")}} className="techIconPort" src="/images/tech/apiv1.png" alt="icon" title="Restful Api"/>
                            <img onClick={() => {this.onSubmit("React")}} className="techIconPort" src="/images/tech/reactv1.png" alt="icon" title="React"/>
                            <img onClick={() => {this.onSubmit("PHP")}} className="techIconPort" src="/images/tech/php1.png" alt="icon" title="PHP"/>
                            <img onClick={() => {this.onSubmit("Laravel")}} className="techIconPort" src="/images/tech/laravel.png" alt="icon" title="Laravel"/>
                            <img onClick={() => {this.onSubmit("Full_CRUD")}} className="techIconPort" src="/images/tech/crud2.png" alt="icon" title="CRUD"/>
                            <img onClick={() => {this.onSubmit("MySQL")}} className="techIconPort" src="/images/tech/mysqlv1.png" alt="icon" title="MySQL"/>
                            <img onClick={() => {this.onSubmit("MongoDB")}} className="techIconPort" src="/images/tech/mongodbv1.png" alt="icon" title="MongoDB"/>
                        </div>
                    </div>
                    <div className="row portfolioCont">
                        {/* <div className="col-4"> */}
                            {this.state.projects.map(item=>(
                                <PortfolioCard 
                                title={item.title}
                                description={item.description}
                                image={item.image}
                                role={item.role}
                                url={item.url}
                                github={item.github}
                                webTools={item.webTools.join(", ")}
                                />

                            ))}
                        {/* </div> */}
                    </div>
                </div>  
            </section>

            )
    }
}

export default Portfolio