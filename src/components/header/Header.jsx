import React from "react";
import * as styles from "./style.module.css";

const Header = () => {
  return (
    <div className={`${styles.container} --bg-dark `}>
      <h1 className="logo">Loans App Dashboard</h1>
    </div>
  );
};

export default Header;
