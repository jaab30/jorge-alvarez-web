import React from "react";
// import { Link } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import "./style.css"


function NavBlock(props) {


    return(
        <Link to={props.toContent}>
            <div className={props.classContent}>
                <div className="navTextDiv">
                    <h2 className="navText">{props.title}</h2>
                </div>
            </div>
        </Link>
    )
}

export default NavBlock