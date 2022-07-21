import React, { useState, useEffect, useContext } from "react";
import NewWallet from "../../Components/NewWallet";
import Wallet from "../../Components/WalletComponent";
import axios from "axios";
import { url, setHeaders } from "../../api/index.js";
import { TitleContext } from "../../Components/UserLayout";

const WalletPage = () => {

  const {setTitle} = useContext(TitleContext)
  const [datos, setDatos] = useState({});

  const getData = async () => {
    try {
      const res = await axios.get(`${url}/wallet`, setHeaders());

      setDatos(res.data);
      // console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };
  // console.log(datos);

  useEffect(() => {
    getData();
    
    setTitle("Wallet")  
  }, []);

  const [walletM, setWalletM] = useState({
    directionName: "Prueba",
    arg: 0,
    btc: 0,
    eth: 0,
    usdt: 0,
    bnb: 0,
    usdc: 0,
  });

  return (
    <>
      {datos.length === 0 ? (
        <>
          <NewWallet walletM={walletM} setWalletM={setWalletM} />
        </>
      ) : (
        <>
          <Wallet datos={datos} setDatos={setDatos} />
        </>
      )}
    </>
  );
};

export default WalletPage;
