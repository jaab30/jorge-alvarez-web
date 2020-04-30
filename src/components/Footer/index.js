import React from "react";
import "./style.css"

function Footer(props) {

    return (
        <footer id="footer" className="container">
            <div className="row">
                <div className="col-12 footerText">
                    Jorge Alvarez | PO Box 679556, Orlando - FL 32867 |  <a href="mailto:jorge.alvarez.web@gmail.com" target="_blank" rel="noopener noreferrer">jorge.alvarez.web@gmail.com</a>
                </div>
                <div className="col-12 footerCount">
                    <img src="https://hitwebcounter.com/counter/counter.php?page=7285763&style=0007&nbdigits=4&type=page&initCount=500" title="User Stats" Alt="PHP Hits Count" border="0" ></img>
                </div>
            </div>
        </footer>

    )
}

export default Footer