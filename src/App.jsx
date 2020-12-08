import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet.jsx";

const App = () => {
  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <Pet name="Luna" animal="Dog" breed="Mongrel" />
      <Pet name="Betty" animal="Cat" breed="Superstar" />
      <Pet name="Scrappy" animal="Cat" breed="Stray" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
