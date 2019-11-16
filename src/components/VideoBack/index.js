import React from "react";
import "./style.css"


function VideoBack(props) {


    return(
        <video autoPlay muted id="myVideo">
            <source src="videos/Atoms - 13232.mp4" type="video/mp4"/>
            Your browser does not support HTML5 video.
        </video>

    )
}

export default VideoBack