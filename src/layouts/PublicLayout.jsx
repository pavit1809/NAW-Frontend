import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const PublicLayout = () => (
  <>
    <Header />
    <div style={{marginTop: '70px', marginBottom: '70px'}}>
      <Outlet />
    </div>
    <Footer />
  </>
);

export default PublicLayout;