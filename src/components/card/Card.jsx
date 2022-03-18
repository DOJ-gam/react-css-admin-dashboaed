import React from "react";
import * as styles from "./styles.module.css";

const Card = ({ heading, amount, icon }) => {
  let Icons = require("react-icons/io5");
  console.log(Icons["IoAddCircleOutline"].name);
  const Icon = Icons[icon];
  return (
    <div className={styles.container}>
      <div className={styles.heading}>{heading}</div>
      <div className={styles.amount}>{amount}</div>
      {/* <Icon size={32} /> */}
    </div>
  );
};

export default Card;
