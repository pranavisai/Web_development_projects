import React from "react";
import ReactDOM from "react-dom";

var first_name = "Pranavi";
var last_name = "Sai";
var number = 7;

ReactDOM.render(
  <div>
    <h1>Hello {first_name + " " + last_name}!</h1>
    <p>Looks like your lucky number is {number}</p>
  </div>,
  document.getElementById("root")
);