import React from "react";
import "../styles/index.css"
import Header from "./header.js";
import AboutMe from "./about-me.js";
import Education from "./education.js";
import Achievement from './achievement.js';
import Extracurricular from './extracurricular.js';

export default function App() {
    const [counter, setCounter] = React.useState(0);
    const colorRun = ["var(--red)", "var(--black)", "var(--white)", "var(--yellow)"];

    React.useEffect(() => {
        const handleClick = (event) => {
            let newCounter;
            setCounter((counter) => {
                if (event.clientX * 2 >= window.screen.width) {
                    newCounter = (counter + 1) % 4;
                } else {
                    newCounter = (counter + 3) % 4;
                }
                let header = document.getElementsByClassName("header");
                header[0].style.backgroundColor = colorRun[newCounter];
                header[0].style.color = colorRun[(newCounter + 2) % 4];
                let cont = document.getElementsByClassName("cont");
                cont[0].style.backgroundColor = colorRun[newCounter % 4];
                cont[1].style.backgroundColor = colorRun[newCounter % 4];
                cont[2].style.backgroundColor = colorRun[newCounter % 4];
                cont[3].style.backgroundColor = colorRun[newCounter % 4];

                let conv = document.getElementById("conv");
                conv.style.transform = `translate(${-25 * newCounter}%, 0)`;

                let conprev = document.getElementById("con" + counter.toString());
                let connext = document.getElementById("con" + newCounter.toString());
                conprev.className = "cont non";
                connext.className = "cont active";

                return newCounter;
            });
        };

        document.addEventListener("click", handleClick);
    }, []);

    return (
        <>
            <Header></Header>
            <div id="containerconv">
                <div id="conv" className="conv">
                    <AboutMe></AboutMe>
                    <Education></Education>
                    <Achievement></Achievement>
                    <Extracurricular></Extracurricular>
                </div>
            </div>
            <div className="content">
                <div className="cont active" id="con0"></div>
                <div className="cont non" id="con1"></div>
                <div className="cont non" id="con2"></div>
                <div className="cont non" id="con3"></div>
            </div>
        </>
    )
}