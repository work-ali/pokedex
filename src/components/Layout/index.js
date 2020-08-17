import React from "react";

const Layout = ({children}) => {
  return (
    <>
      <div className="page-bg"></div>
      {children}
    </>
  );
};

export default Layout;
