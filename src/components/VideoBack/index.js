import React from "react";
import "./style.css"

class VideoBack extends React.Component {

    state = {
        videoSrc: "videos/atoms.mp4"
    }

    componentDidMount() {
        document.getElementById('myVideo').addEventListener('ended', this.changeVideo, false);
      }

      changeVideo = () => {
          this.setState({
              videoSrc: "images/atomGif1.gif"
          })
          console.log(this.state.videoSrc)
      }

      render() {
            return(
                // console.log(this.state.videoSrc)
                this.state.videoSrc === "videos/atoms.mp4" ? 
                <video autoPlay muted id="myVideo">
                    <source src={this.state.videoSrc} type="video/mp4"/>
                    Your browser does not support HTML5 video.
                </video> :
                <img id="myGif" src={this.state.videoSrc} alt="introImage" />

            )
        }
    }

export default VideoBack