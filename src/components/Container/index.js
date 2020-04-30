import React from "react";

function Container(props) {
    return (
        <div className="contatiner-fluid">{props.children}</div>
    )
}

export default Container