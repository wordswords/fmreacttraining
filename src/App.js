import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement(
    "div",
    { id: "something-important" },
    React.createElement("h1", { className: "main-title" }, "Adopt Me!"),
    Pet({
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
    Pet({
      name: "Betty",
      animal: "Cat",
      breed: "Stray",
    }),
    Pet({
      name: "Scrappy",
      animal: "Catty",
      breed: "Stray",
    })
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
