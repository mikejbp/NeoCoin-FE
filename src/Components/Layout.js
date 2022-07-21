import React from 'react';
import Navbar from './NavBar'
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="">

      <Navbar />
      <div className='navSmallScreenDiv'> </div>
      {children}
      <Footer />
    </div>
  );
};
export default Layout;