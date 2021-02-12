import React from "react";
import styles from "./Statistics.module.css";

function Statistics({ order }) {
  const popular = order.flat().reduce((acc, el) => {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
  }, {});
  const popularSorted = Object.keys(popular).sort((a, b) => {
    return popular[b] - popular[a];
  });

  return (
    <div className={styles.statistics}>
      <h2 className={styles.heading}>Our best selling pizzas</h2>
      <ol>
        {popularSorted.map((item) => (
          <li className={styles.item} key={item}>
            {item}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Statistics;
