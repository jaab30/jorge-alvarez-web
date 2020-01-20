import React from "react"


function WorkCard(props) {




return(

    <div className="col-md-6 col-lg-4 classColumn">
        <div className="cardDiv">
        {/* <img src={props.image} className="workImage" alt="Company Logo"/> */}
        <div className="workCardHeader">
            <h3 className="workTitle">{props.title}</h3>
            <div className="workSubTitleDiv">
            <h4 className="workSubTitle">{props.subTitle}</h4>
            </div>
            {/* <hr></hr> */}
            <h5 className="workPosition">{props.position}</h5>
        </div>
        <ul className="">
            {props.description.map((item, i)=>(
                <li key={i} className="workDescription">{item}</li>
            ))}
        </ul>
        </div>
    </div>

)

}


export default WorkCard