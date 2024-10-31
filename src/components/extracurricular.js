import React from "react";
import "../styles/index.css";
import "../styles/extracurricular.css";
import EZKomu from "../pics/ezkomu.png";
import ChessNK from "../pics/chessnk.png";
import PHC from "../pics/harmonica.png";
import SMT from "../pics/singmytone.png";
import PGS from "../pics/pgs.png";
import TIV from "../pics/tiv.png";
import KNS from "../pics/kns.png";
import TCC from "../pics/tcc.png";

export default function Extracurricular() {
    return (
        <div className="extracurricular">
            <h1 className="title">PROJECTS</h1>
            <div className="container">
                <table>
                    <thead>
                        <tr>
                            <th colSpan={2}>Project</th>
                            <th>Type</th>
                            <th>Role</th>
                            <th>Grade</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><img src={EZKomu}></img></td>
                            <td>EZKomu</td>
                            <td>Website</td>
                            <td>Website Developer</td>
                            <td>9</td>
                        </tr>
                        <tr>
                            <td><img src={SMT}></img></td>
                            <td>SingMyTone</td>
                            <td>Website</td>
                            <td>Website Developer</td>
                            <td>11</td>
                        </tr>
                        <tr>
                            <td><img src={PGS}></img></td>
                            <td>Guess the PGS5 Player</td>
                            <td>Website</td>
                            <td>Website Developer</td>
                            <td>11</td>
                        </tr>
                        <tr>
                            <td><img src={ChessNK}></img></td>
                            <td>ChessNK</td>
                            <td>Club</td>
                            <td>HR - Logistics Department Member</td>
                            <td>10, 11</td>
                        </tr>
                        <tr>
                            <td><img src={PHC}></img></td>
                            <td>PTNK Harmonica Club</td>
                            <td>Club</td>
                            <td>Content Department Member</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td><img src={TIV}></img></td>
                            <td>The Institute of Viécie</td>
                            <td>Community Project</td>
                            <td>Research Department Member</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td><img src={KNS}></img></td>
                            <td>CLB Kỹ Năng Số</td>
                            <td>Club</td>
                            <td>Co-founder</td>
                            <td>11</td>
                        </tr>
                        <tr>
                            <td><img src={TCC}></img></td>
                            <td>Trạm Chuyển Cấp 25:28</td>
                            <td>Community Project</td>
                            <td>Math Department Member</td>
                            <td>11</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}