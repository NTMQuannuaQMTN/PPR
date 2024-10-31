import React from "react";
import "../styles/index.css";
import "../styles/education.css";
import sec from "../pics/seced.jpg";
import seclogo from "../pics/secedlog.png";
import high from "../pics/highed.jpg";
import highlogo from "../pics/highedlog.png";

export default function Education() {
    return (
        <div className="education">
            <h1 className="title">EDUCATION</h1>
            <div className="container">
                <div className="school">
                    <div className="info">
                        <img src={sec}></img>
                        <img src={seclogo}></img>
                    </div>
                    <h1>TRẦN ĐẠI NGHĨA HIGH SCHOOL FOR THE GIFTED</h1>
                    <h2>Class: 9A13, class of 2023</h2>
                    <ul>Scores:
                        <li>GPA Grade 9: 9.5</li>
                    </ul>
                </div>
                <div className="school">
                    <div className="info">
                        <img src={high}></img>
                        <img src={highlogo}></img>
                    </div>
                    <h1>VNUHCM - HIGH SCHOOL FOR THE GIFTED</h1>
                    <h2>Class: Math major, class of 2026</h2>
                    <ul>Scores:
                        <li>GPA Grade 10: 9.5</li>
                        <li>IELTS: 7.5</li>
                        <li>SAT: 1430 (630 Reading, 800 Math)</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}