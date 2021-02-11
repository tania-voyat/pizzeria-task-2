import React from "react";

function PizzaList({ menu }) {
  return (
    <ul>
      {menu.map(({ name, ingridients }) => (
        <li key={name}>
          <h3>{name}</h3>
          <p>{Object.keys(ingridients).join(", ")}</p>
        </li>
      ))}
    </ul>
  );
}

export default PizzaList;
