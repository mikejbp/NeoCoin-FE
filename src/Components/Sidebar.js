import React, { useState } from "react";
import image from "../Assets/neocoin_logo.png";
import home from "../Assets/Icon1.svg";
import wallet from "../Assets/Wallet.svg";
import swap from "../Assets/swap.svg";
import seetings from "../Assets/setting.svg";
import logout from "../Assets/logout.svg";
import { Link, Navigate } from "react-router-dom";
import "../CSS/Sidebar.css";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../store/actions/authActions";
import "../CSS/TextImage.css";
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";

const Sidebar = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const handleSignOut = () => {
    dispatch(signOut());
    if (auth.token == null) return <Navigate to="/" />;
  };
  const [ver, setVer] = useState(false);
  return (
    <>
      <button
        className={ver ? "absolute left-2 top-3 md:hidden boton rotate" : "absolute left-2  top-3 md:hidden boton"}
        onClick={() => {setVer(!ver);}}
      >
          <ChevronRightIcon boxSize={35} />
  
      </button>
      <nav className={ver ? "sidebar  " : "sidebar mostrar z-30 "}>
        <div className="sidebarImage">
          <img className="imageLogo" src={image} alt="Imagenes Criptomonedas" />
        </div>

        <ul className="menuSidebar">
          <Link to={"/private"}>
            <li onClick={() => {setVer(!ver);}}>
              <div className="icon">
                <img src={home} alt="Icono Home" />
              </div>
              <h4>Home</h4>
            </li>
          </Link>

          <Link to={"/private/wallet"}>
            <li onClick={() => {setVer(!ver);}}>
              <div className="icon">
                <img src={wallet} alt="Icono Home" />
              </div>
              <h4>Wallet</h4>
            </li>
          </Link>

          <Link to={"/private/swap"}>
            <li onClick={() => {setVer(!ver);}}>
              <div className="icon">
                <img src={swap} alt="Icono Home" />
              </div>
              <h4>Swap</h4>
            </li>
          </Link>

          {/*    <Link to={"/private/profile"}>
            <li>
              <div className=icon}>
                <img src={profile} alt="Icono Home" />
              </div>
              <h4>Profile</h4>
            </li>
          </Link> */}

          <Link to={"/private/settings"}>
            <li onClick={() => {setVer(!ver);}}>
              <div className="icon">
                <img src={seetings} alt="Icono Home" />
              </div>
              <h4>Setting</h4>
            </li>
          </Link>
            <li>
              <button className="sidebarButtonLogout" style={{ display: "row" }} onClick={() => handleSignOut()}>
                <div className="icon">
                  <img src={logout} alt="Icono Home" />
                </div>
              
              <h4>Logout</h4>
              </button>
            </li>
        </ul>
        <div className="contentDarckLight">
          <h3 className="darcklight">Switch Dark/ light Theme</h3>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
