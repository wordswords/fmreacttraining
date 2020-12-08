import React from "react";

export default function Pet({ name, animal, breed }) {
  return (
    <div>
      <h3>{name}</h3>
      <ul>
        <li>Animal: {animal}</li>
        <li>Breed: {breed}</li>
      </ul>
    </div>
  );
}
