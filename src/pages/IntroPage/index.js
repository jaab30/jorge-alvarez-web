import React from "react";

import "./style.css";

import VideoBack from "../../components/VideoBack"
import NavBlock from "../../components/NavBlock";


class IntroPage extends React.Component {

    // state = {
    //     height: '50px'
    //   }
    
    //   listenScrollEvent = e => {
    //     if (window.scrollY > 400) {
    //       this.setState({height: '50px'})
    //     } else {
    //       this.setState({height: '100vh'})
    //     }
    //   }
    
    //   componentDidMount() {
    //     window.addEventListener('scroll', this.listenScrollEvent)
    //   }

    render(){

        return (
            <div id="intro" className="introPage">
                <VideoBack />
                <div className="content">
                    <h1 className="headingIntro">Portfolio</h1>
                    <NavBlock
                    toContent={"/#about"}
                    classContent={"nav about"}
                    title={"About"} 
                    />
                    <NavBlock
                    toContent={"/#work"}
                    classContent={"nav work"}
                    title={"Work"} 
                    />
                    <NavBlock
                    toContent={"/#portfolio"}
                    classContent={"nav portfolio"}
                    title={"Portfolio"} 
                    />
                    <NavBlock
                    toContent={"/#contact"}
                    classContent={"nav contact"}
                    title={"Contact"} 
                    /> 
                </div>
            </div>
        )
    }


}

export default IntroPage;