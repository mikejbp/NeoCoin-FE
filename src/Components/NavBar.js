import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../CSS/NavBar.css"
import image from "../Assets/navbardos.png";


const NavBar = () => {
  const [menu, setMenu] = useState(true);

  const seeMenu = () => {
    setMenu(!menu);
  };

  return (
    <nav className="md:flex md:items-center md:justify-between text-sky-600 nav">
      <div className="navDiv">
        <img
          className="h-10 inline mx-6"
          src={image}
          alt="Imagenes Criptomonedas"
        />
        <h4 className="text-xs mx-10 navBar-logoSubtitle">CRYPTOCURRENCY EXCHANGE</h4>
        <span
          onClick={seeMenu}
          className="cursor-pointer text-3xl md:hidden block text-center absolute top-0 right-3 navSpan"
        >
          <ion-icon name="menu-outline"></ion-icon>
        </span>
      </div>

      <ul
        className={
          menu
            ? "md:flex md:items-center flex justify-around items-center flex-col md:flex-row screenNav navCerrado"
            : "md:flex md:items-center flex justify-around items-center flex-col md:flex-row screenNav navAbierto"
        }
      >
        <Link to={"/"} onClick={seeMenu}>
          <li className="mx-8 my-6 md:my-0 text-xl homeLink navLink">Home</li>
        </Link>
        <Link to={"/aboutUs"} onClick={seeMenu}>
          <li className="mx-8 my-6 md:my-0 text-xl navLink">About Us</li>
        </Link>
        <Link to={"/analytics"} onClick={seeMenu}> 
          <li className="mx-8 my-6 md:my-0 text-xl navLink">Analytics</li>
        </Link>
        <li className="md:left-7">
          <div className="  rounded-xl p-2 hidden md:inline">
            {/* {Ver que no se le puede dar clases al icono, hacerlo de color gris} */}
            <ion-icon name="moon-outline" className="moon"></ion-icon>
          </div>
          <Link to={"/userLogin"} onClick={seeMenu}>
            <button
              className="bg-sky-600 text-white px-6 py-2 mx-8 rounded-xl hover:bg-sky-700 transition-color navButton"
            >
              Sign in
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
