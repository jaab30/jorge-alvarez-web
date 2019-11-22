import React from "react";
import styled, { keyframes } from 'styled-components';
import { flash } from 'react-animations'
// import Typing from 'react-typing-animation';
import "./style.css";

import VideoBack from "../../components/VideoBack"
import NavBlock from "../../components/NavBlock";


const fadeInAnimation = keyframes`${flash}`;
 
const FadeDiv = styled.div`
    animation: .7s ${fadeInAnimation};
    `;

    
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
                    <div className="typeWriter">
                    Full Stack Web Developer
                    </div>
                    <FadeDiv><h1 className="headingIntro">Jorge Alvarez</h1></FadeDiv>
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