import React from 'react';
import BottomBar from '../Components/BottomBar';


const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">{children}</main>
      <BottomBar />
    </div>
  );
};

export default Layout;