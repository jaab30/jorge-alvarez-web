import React from "react";
// import { Link } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import "./style.css";

class Nav extends React.Component {
 
    state = {
        display: 'none'
      }
    
      listenScrollEvent = e => {
        if (window.scrollY < 350) {
          this.setState({display: 'none'})
        } else {
          this.setState({display: 'block'})
        }
      }
    
      componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
      }

      render(){

            return(
                <div className="navbarContainer" style={{display: this.state.display}}>
                    <div className="navItem">
                        <Link className="navItem-link active" to="/#about">About</Link>
                    </div>
                    <div className="navItem">
                        <Link className="navItem-link" to="/#work">Work</Link>
                    </div>
                    <div className="navItem">
                        <Link className="navItem-link" to="/#portfolio">Portfolio</Link>
                    </div>
                    <div className="navItem">
                        <Link className="navItem-link" to="/#contact">Contact</Link>
                    </div>
                    <div className="navItemLogo">
                        <Link className="navItem-link" to="/#intro">Jorge Alvarez</Link>
                    </div>
                </div>
            )
        }
}

export default Nav