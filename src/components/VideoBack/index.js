import React from "react";
import "./style.css"


function VideoBack(props) {


    return(
        <video autoPlay muted loop id="myVideo">
            <source src="videos/Milky Way - 22763.mp4" type="video/mp4"/>
            Your browser does not support HTML5 video.
        </video>

    )
}

export default VideoBack