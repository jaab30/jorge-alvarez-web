import React from "react";
import projects from "../../portfolio.json"
import "./style.css"


class Portfolio extends React.Component {

    state =  {
        projects: projects
    }

    render(){
        return(
            <section id="portfolio" className="parallaxWrapper">
                {this.state.projects.map(item=>(
                    <div>
                    <p>{item.title}</p>
                    <img src={item.image} alt={item.title}/>
                    <p>{item.description}</p>
                    <p>{item.role}</p>
                    <a href={item.url}>Url</a>
                    <a href={item.github}>Git Hub</a>
                    </div>
                ))}

            </section>

            )
    }
}

export default Portfolio