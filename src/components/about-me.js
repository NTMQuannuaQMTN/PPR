import React from "react";
import "../styles/index.css";
import "../styles/about-me.css";
import myself from "../pics/myself.png";

export default function AboutMe() {
    return (
        <div className="about-me">
            <h1 className="title">ABOUT ME</h1>
            <div className="container">
                <div className="set-left">
                    <img src={myself} alt="Image" className="image-left"></img>
                </div>
                <div className="set-right">
                    <h2>Nguyen Truong Manh Quan</h2>
                    <h3>DOB: Nov 01, 2008</h3>
                    <h3>Location: Ho Chi Minh City, Vietnam</h3>
                </div>
            </div>
        </div>
    );
}