import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import WalletPage from "./WalletPage";

const WalletUltimate = () => {
  const auth = useSelector((state) => state.auth);
  if (auth.token == null) return <Navigate to="/userLogin" />;
  return <WalletPage></WalletPage>;
};

export default WalletUltimate;
