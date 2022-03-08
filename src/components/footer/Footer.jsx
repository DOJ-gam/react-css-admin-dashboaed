import React from "react";
import * as styles from "./styles.module.css";
const Footer = () => {
  return (
    <div className={`${styles.container} bg-dark`}>
      <h3 className="footer">
        All rights reserverd 2022 &copy; Something here
      </h3>
    </div>
  );
};

export default Footer;
