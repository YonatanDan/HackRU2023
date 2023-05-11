import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

const Layout = ({ populations }) => {
  return (
    <>
      <Navbar populations={populations} />
      <Outlet />
    </>
  );
};

export default Layout;
