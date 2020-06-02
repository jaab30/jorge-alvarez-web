import React from "react";
import styled, { keyframes } from 'styled-components';
import { flash } from 'react-animations'
import "./style.css";

import NavBlock from "../../components/NavBlock";

const fadeInAnimation = keyframes`${flash}`;

const FadeDiv = styled.div`
    animation: .7s ${fadeInAnimation};
    `;


function IntroPage() {

    return (
        <div id="intro" className="introPage">

            <div className="content">
                <div className="container-fluid headingIntro">
                    <div className="row">
                        <div className="col-sm-12">
                            <FadeDiv><h1 className="introTitle">Jorge Alvarez</h1></FadeDiv>
                            <h3 className="introSubTitle">Web Developer</h3>
                        </div>
                    </div>
                </div>
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

export default IntroPage;