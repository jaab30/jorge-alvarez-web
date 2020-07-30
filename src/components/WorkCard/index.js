import React from "react"

function WorkCard({ image1, image2, title1, title2, subTitle, position, description }) {

    return (

        <div className="col mx-auto classColumn">
            <div className="cardDiv">
                <div className="workCardHeader">
                    <div className="row">
                        <div className="col-md-6 workTitleDiv">
                            <h3 className="workTitle">
                                <img src={image1} className="workImg" alt="Trilogy Logo"/>
                                {title1}
                            </h3>
                        </div>
                        <div className="col-md-6 workTitleDiv">
                            <h3 className="workTitle">
                                <img src={image2} className="workImg" alt="Trilogy Logo"/>
                                {title2}
                            </h3>
                        </div>
                    </div>
                    <div className="workSubTitleDiv">
                        <h4 className="workSubTitle">{subTitle}</h4>
                    </div>
                    <h5 className="workPosition">{position}</h5>
                </div>
                <ul className="">
                    {description.map((item, i) => (
                        <li key={i} className="workDescription">{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default WorkCard