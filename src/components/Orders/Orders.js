import React from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./Orders.module.css";

function Orders({ order }) {
  return (
    <div className={styles.orders}>
      <h3>Your orders</h3>
      {order.length > 0 ? (
        <ul>
          {order.map((item) => (
            <li className={styles.item} key={uuidv4()}>
              {item.join(", ")}
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.message}>You do not have orders yet.</p>
      )}
    </div>
  );
}

export default Orders;
