import React, { useState, useEffect } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import "./style.css";

function Nav() {

  const [display, setDisplay] = useState("none");

  const listenScrollEvent = e => {
    if (window.scrollY < 350) {
      setDisplay("none");
    } else {
      setDisplay("block");
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent)
  })


  return (
    <div className="navbarContainer" style={{ display }}>
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
        <Link className="navItem-link mr-2" to="/#intro">Jorge Alvarez</Link>
          <a className="socialNav" href="https://www.linkedin.com/in/meet-jorge-alvarez" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
          <a className="socialNav" href="https://github.com/jaab30" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square"></i></a>
      </div>
    </div>
  )
}

export default Nav