import React, { useContext } from "react";
import CardsSetings from "../../Components/CardsSettins";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { TitleContext } from "../../Components/UserLayout";

export default function PrivateSettings() {
  const {setTitle} = useContext(TitleContext)
  setTitle("Settings")  
  const auth = useSelector((state) => state.auth);
  if (auth.token == null) return <Navigate to="/userLogin" />;
  return (
    <div className="flex flex-col">
      <CardsSetings />
    </div>
  );
}
