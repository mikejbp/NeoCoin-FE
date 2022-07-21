import React, { useState, createContext } from 'react';
import UserNavBar from "./UserNavBar"
import Sidebar from "./Sidebar.js"
import "../CSS/UserLayout.css"



export const TitleContext = createContext();

const UserLayout = ({ children }) => {
  const [title, setTitle] = useState("Neocoin")
  
  return (
    <div className="UserLayout">
        <div className='userLayoutSidebar'>
            <Sidebar />
        </div>
        <div className="userLayoutNavBar">
          <TitleContext.Provider value={{title, setTitle}} >
            <UserNavBar/>
            <div className='userLayoutChildren'>
            {children}
            </div>
            </TitleContext.Provider>
        </div>
    </div>
  );
};
export default UserLayout;