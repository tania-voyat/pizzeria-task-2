import React from "react";
import PizzaList from "./PizzaList/PizzaList";
import menu from "../Data/menu.json";

export default function App() {
  return (
    <>
      <PizzaList menu={menu}></PizzaList>
    </>
  );
}
