import React from "react";
import PizzaList from "./PizzaList/PizzaList";
import menu from "../Data/menu.json";
import Orders from "./Orders/Orders";
import Statistics from "./Statistics/Statistics";

export default function App() {
  return (
    <>
      <PizzaList menu={menu}></PizzaList>
      <Orders></Orders>
      <Statistics></Statistics>
    </>
  );
}
