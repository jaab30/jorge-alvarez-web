import React from "react"
import "./style.css"


function PortfolioCard(props) {


return(
        // <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12">
        <div className="row portfolioRowDiv">
            <div className="col-lg-3 portfolioImageDiv">
            <a className="portfolioImageLink" href={props.url} target="_blank" rel="noopener noreferrer"><img className="portfolioImage" src={props.image} alt={props.title}/></a>
            </div>
            <div className="col-lg-9 portfolioContentDiv">
                <h3 className="portfolioTitle">{props.title}</h3>
                <p> <strong>Web Tools:</strong>  {props.webTools} </p>
                <p> <strong>Role:</strong>  {props.role}</p>
                <p> <strong>Description:</strong> {props.description} </p>
                <div className="portfolioAnchorDiv">
                    <a className="btn btn-success" href={props.url} target="_blank" rel="noopener noreferrer"><i className="fas fa-eye"></i>Project URL</a>
                    <a className="btn btn-warning" href={props.github} target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i>Git Hub</a>
                </div>
            </div>
            
        </div>
        // </div>

)

}


export default PortfolioCard