import React from "react";
import ReactDOM from "react-dom/client";
const luckyno = Math.floor(Math.random() * 10);
const name = "Linus Ngetich";
customstyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black",
};
const time = new Date().getHours();

if (time < 12) {
  customstyle.color = "blue";
  const greet = "Morning";
} else if (time > 12) {
  customstyle.color = "red";
  greet = "afternoon";
} else {
  customstyle.color = "yellow";
  greet = "goood night";
}

const copyright = new Date().getFullYear();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="body">
    <h1 style={customstyle}> hello {greet} </h1>
    <p contentEditable="true"> my lucky number is {luckyno} </p>
    <div>
      <img
        className="images"
        src="https://images.pexels.com/photos/27044024/pexels-photo-27044024/free-photo-of-a-man-sitting-on-a-motorcycle-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
      ></img>
      <img
        className="images"
        src="https://images.pexels.com/photos/27584801/pexels-photo-27584801/free-photo-of-a-woman-in-a-dress-walking-on-the-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
      ></img>
    </div>
    <img
      className="images"
      src="https://images.pexels.com/photos/27466821/pexels-photo-27466821/free-photo-of-model-in-blazer.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    ></img>
    <h3> Created by {name} </h3>
    <p> copyright &copy; {copyright} </p>
  </div>
);
