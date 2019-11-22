import React from "react";
import "./style.css"

class VideoBack extends React.Component {

    state = {
        videoSrc: "videos/MilkyWay.mp4"
    }

    // componentDidMount() {
    //     document.getElementById('myVideo').addEventListener('ended', this.changeVideo, false);
    //   }

    //   changeVideo = () => {
    //       this.setState({
    //           videoSrc: "images/atomGif1.gif"
    //       })
    //       console.log(this.state.videoSrc)
    //   }

      render() {
            return(
                // console.log(this.state.videoSrc)
                <video autoPlay muted loop id="myVideo">
                    <source src={this.state.videoSrc} type="video/mp4"/>
                    Your browser does not support HTML5 video.
                </video>

            )
        }
    }

export default VideoBack