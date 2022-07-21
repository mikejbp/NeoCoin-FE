import React, { useContext } from "react";
import oldGreenlogo from "../Assets/greenOldManLogo.svg";
import messageLogo from "../Assets/messageLogo.svg";
import "../CSS/UserNavBar.css";
import { TitleContext } from "./UserLayout";

export default function UserNavBar() {
  const {title} = useContext(TitleContext)
  document.title = "Neocoin - " + title;
  return (
    <nav className="userHeader">
      <h1 className="userHeaderTItle">{title}</h1>
      <img src={messageLogo} alt="asd" className="messageLogo" />
      <img src={oldGreenlogo} alt="asd" className="userLogo" />
    </nav>
  );
}
