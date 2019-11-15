import React from "react";
import "./style.css";

import VideoBack from "../../components/VideoBack"
import NavBlock from "../../components/NavBlock";


class IntroPage extends React.Component {



    render(){

        return (
            <div className="introPage">
                <VideoBack />
                <div class="content">
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