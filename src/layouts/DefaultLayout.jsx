import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className="main">
        <Sidebar />
        {children}
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default DefaultLayout;
