import React from "react";
import "./style.css"


function Container(props) {


    return(
        <div className="contatiner-fluid">{props.children}</div>

    )
}

export default Container