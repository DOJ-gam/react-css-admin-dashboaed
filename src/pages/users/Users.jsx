import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import * as styles from "./styles.module.css";

const Test = () => {
  return (
    <div>
      <DefaultLayout>
        <h1 className={`${styles.heading} --heading`}>All Users</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Omar Jeng</td>
              <td>Banjulindning</td>
              <td>+220 3540237</td>
              <td>omarjeng999@gmail.com</td>
              <td>D9230</td>
            </tr>
            <tr>
              <td>Omar Jeng</td>
              <td>Banjulindning</td>
              <td>+220 3540237</td>
              <td>omarjeng999@gmail.com</td>
              <td>D9230</td>
            </tr>
            <tr>
              <td>Omar Jeng</td>
              <td>Banjulindning</td>
              <td>+220 3540237</td>
              <td>omarjeng999@gmail.com</td>
              <td>D9230</td>
            </tr>
            <tr>
              <td>Omar Jeng</td>
              <td>Banjulindning</td>
              <td>+220 3540237</td>
              <td>omarjeng999@gmail.com</td>
              <td>D9230</td>
            </tr>
            <tr>
              <td>Omar Jeng</td>
              <td>Banjulindning</td>
              <td>+220 3540237</td>
              <td>omarjeng999@gmail.com</td>
              <td>D9230</td>
            </tr>
            <tr>
              <td>Omar Jeng</td>
              <td>Banjulindning</td>
              <td>+220 3540237</td>
              <td>omarjeng999@gmail.com</td>
              <td>D9230</td>
            </tr>
          </tbody>
        </table>
      </DefaultLayout>
    </div>
  );
};

export default Test;
