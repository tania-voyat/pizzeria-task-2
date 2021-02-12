import React, { useState, useEffect } from "react";
import Orders from "../Orders/Orders";
import Statistics from "../Statistics/Statistics";
import styles from "./PizzaList.module.css";

function PizzaList({ menu }) {
  const [cart, setCart] = useState([]);
  const [order, setOrder] = useState([]);

  const confirmOrderHandler = () => {
    setOrder([cart, ...order]);
    setCart([]);
  };

  return (
    <>
      <h2 className={styles.menu}>Our menu</h2>
      <ul className={styles.pizzaList}>
        {menu.map(({ name, ingredients }) => (
          <li key={name} className={styles.pizzaListItem}>
            <h3 className={styles.pizzaName}>{name}</h3>
            <p className={styles.ingredients}>
              {Object.keys(ingredients).join(", ")}
            </p>
            <button
              type="button"
              className={styles.button}
              onClick={() => setCart([...cart, name])}
            >
              Add to cart
            </button>
          </li>
        ))}
      </ul>
      <div className={styles.wrapper}>
        <div className={styles.cart}>
          <h3>Your cart</h3>
          {cart.length > 0 ? (
            <>
              <p className={styles.orderedPizza}>{cart.join(", ")}</p>
              <button
                type="button"
                className={styles.button}
                onClick={confirmOrderHandler}
              >
                Confirm order
              </button>
            </>
          ) : (
            <p className={styles.message}>
              Your cart is currently empty. Please choose your pizza!
            </p>
          )}
        </div>
        <Orders order={order}></Orders>
      </div>
      <Statistics order={order}></Statistics>
    </>
  );
}

export default PizzaList;
