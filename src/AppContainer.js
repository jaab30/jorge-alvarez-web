import React from "react"
import App from "./App"
import { ParallaxProvider } from 'react-scroll-parallax';


class AppContainer extends React.Component {

    render() {

        return (
            <ParallaxProvider>
                <App />
            </ParallaxProvider>
        )
    }
}

export default AppContainer;