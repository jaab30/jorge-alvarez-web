import React from "react";
import "./style.css";

import IntroPage from "../../pages/IntroPage"
import About from "../../pages/About"
import Work from "../../pages/Work"
import Portfolio from "../../pages/Portfolio"
import Contact from "../../pages/Contact"
import Footer from "../../components/Footer"



class Main extends React.Component {



    render(){

        return (
            <div>
                <IntroPage />
                <About />
                <Work />
                <Portfolio />
                <Contact />
                <Footer />
            </div>
        )
    }


}

export default Main;