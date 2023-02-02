import React, { useEffect, useState } from "react";
import Sidenav from "./sidenav";

function MainLayout({ children }) {
  return (
    <>
      <Sidenav />
      {children}
    </>
  );
}

export default MainLayout;
