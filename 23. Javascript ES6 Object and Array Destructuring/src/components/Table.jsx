import React from "react";
import cars from "../practice.js";

function Table(){
    // Destructuring
    const [honda, tesla] = cars;
    const {coloursByPopularity: [teslaTopColour, teslaBottomColour] ,speedStats: {topSpeed: teslaTopSpeed, zeroToSixty: teslaZeroToSixty}} = tesla;
    const {coloursByPopularity: [hondaTopColour, hondaBottomColour] ,speedStats: {topSpeed: hondaTopSpeed, zeroToSixty: hondaZeroToSixty}} = honda;

    return (
    <table>
        <tr>
            <th>Brand</th>
            <th>Top Speed</th>
        </tr>
        <tr>
            <td>{tesla.model}</td>
            <td>{teslaTopSpeed}</td>
            <td>{teslaTopColour}</td>
        </tr>
        <tr>
            <td>{honda.model}</td>
            <td>{hondaTopSpeed}</td>
            <td>{hondaTopColour}</td>
        </tr>
    </table>
    );
}

export default Table;