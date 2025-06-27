import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

const [honda, tesla] = cars;

const { colorsByPopularity:  [teslaTopcolor],  speedStats: {topSpeed: teslaTopSpeed}} = tesla;
const { colorsByPopularity: [hondaTopcolor], speedStats: {topSpeed: hondaTopSpeed}} = honda;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopcolor}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopcolor}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
