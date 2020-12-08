import React from "react";

export default function Pet({ name, animal, breed }) {
  return React.createElement("ol", {}, [
    React.createElement("li", { className: "pet" }, name),
    React.createElement("li", { className: "pet" }, animal),
    React.createElement("li", { className: "pet" }, breed),
  ]);
}
