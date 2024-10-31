import React from "react";
import "../styles/index.css";
import "../styles/achievement.css";

export default function Achievement() {
    return (
        <div className="achievement">
            <h1 className="title">AWARDS</h1>
            <div className="container">
                <table>
                    <thead>
                        <tr>
                            <th>Competition</th>
                            <th>Achievement</th>
                            <th>Grade</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>National Competition of Designing & Building Technologies for People with Disabilities</td>
                            <td>Finalist (Top 15)</td>
                            <td>9</td>
                        </tr>
                        <tr>
                            <td>Citywide Contest of Fast Calculation with Calculators</td>
                            <td>Second Place</td>
                            <td>9</td>
                        </tr>
                        <tr>
                            <td>Citywide Excellent Student Contest in Math</td>
                            <td>First Place</td>
                            <td>9</td>
                        </tr>
                        <tr>
                            <td>PTNK Initiative in Interdisciplinary Science and Engineering (PIISE)</td>
                            <td>Finalist</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>International Kangaroo Math Contest</td>
                            <td>National Champion</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>Singapore and Asian Schools Math Olympiad</td>
                            <td>Gold Medal, Global Rank 5</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>National Computer Science Youth Competition</td>
                            <td>Regional Finalist</td>
                            <td>11</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}