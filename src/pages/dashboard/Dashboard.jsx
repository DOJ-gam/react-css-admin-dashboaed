import React from "react";
import Card from "../../components/card/Card";
import DefaultLayout from "../../layouts/DefaultLayout";
import * as styles from "./styles.module.css";

const Dashboard = () => {
  return (
    <div>
      <DefaultLayout>
        <h1 className="heading">Loan Stats</h1>
        <div className={styles.cardContainer}>
          <div className={styles.cardItem}>
            <Card heading="Total Loans" amount={49000} />
          </div>
          <div className={styles.cardItem}>
            <Card heading="Users On Loan" amount={2100} />
          </div>
          <div className={styles.cardItem}>
            <Card heading="Interest Earned" amount={149000} />
          </div>
        </div>
      </DefaultLayout>
    </div>
  );
};

export default Dashboard;
