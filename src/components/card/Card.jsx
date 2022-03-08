import React from "react";
import * as styles from "./styles.module.css";

const Card = ({ heading, amount, icon }) => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>{heading}</div>
      <div className={styles.amount}>{amount}</div>
    </div>
  );
};

export default Card;
