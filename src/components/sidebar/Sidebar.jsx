import React from "react";
import { Link } from "react-router-dom";
import * as styles from "./styles.module.css";
import { MdOutlineDashboard, MdOutlineAddRoad } from "react-icons/md";
const Sidebar = () => {
  return (
    <div className={`${styles.container} --bg-dark }`}>
      <div className={styles.navItems}>
        <div className={styles.navItem}>
          <MdOutlineDashboard size={40} color="white" />
          <Link to="/">Dashboard</Link>
        </div>
        <div className={styles.navItem}>
          <MdOutlineAddRoad size={40} color="white" />
          <Link to="/test">Users</Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
