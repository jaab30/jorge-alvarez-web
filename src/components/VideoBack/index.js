import React from "react";
import "./style.css"

class VideoBack extends React.Component {

    state = {
        videoSrc: "videos/MilkyWay.mp4"
    }


      render() {
            return(
                <video autoPlay muted loop id="myVideo">
                    <source src={this.state.videoSrc} type="video/mp4"/>
                    Your browser does not support HTML5 video.
                </video>

            )
        }
    }

export default VideoBack