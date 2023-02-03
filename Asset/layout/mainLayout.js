import React, { useEffect, useState } from "react";
import Sidenav from "./sidenav";

function MainLayout({ children , title }) {
  return (
    <>
      <Sidenav heading={title}/>
      {children}
    </>
  );
}

export default MainLayout;
