import React from "react";
import ReactDOM from "react-dom";

const d = new Date();
const hour = d.getHours();

let timeOfDay;
const customStyle = {
  color: "",
};

if (hour >= 5 && hour < 12) {
  timeOfDay = "Good morning";
  customStyle.color = "red";
} else if (hour >= 12 && hour < 17) {
  timeOfDay = "Good afternoon";
  customStyle.color = "green";
} else {
  timeOfDay = "Good night";
  customStyle.color = "blue";
}

ReactDOM.render(
  <h1 style={{ color: customStyle.color }}>{timeOfDay}</h1>,
  document.getElementById("root")
);
