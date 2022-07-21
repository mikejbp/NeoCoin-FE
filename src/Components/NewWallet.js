import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addWallet, updateWallet } from "../store/actions/walletActions";
import "../CSS/WalletComponent.css";

const NewWallet = ({ walletM, setWalletM }) => {
  const dispatch = useDispatch();
  const wallet = useSelector((state) => state.wallet);
  function refreshPage() {
    window.location.reload(false);
  }

  const handle = () => {
    /* if (walletM._id) {
      const id = wallet._id;
      const updateWallet = {
        directionName: walletM.directionName,
        user: walletM.user,
        arg: walletM.arg,
        btc: walletM.btc,
        eth: walletM.eth,
        usdt: walletM.bnb,
        usdc: walletM.usdc,
        uid: walletM.uid,
      };
      dispatch(updateWallet(updateWallet, id));
    } else { */
    const newWallet = {
      ...walletM,
    };
    dispatch(addWallet(newWallet));
    refreshPage()
  };
  /*  }; */
  return (
    <div className="walletBody">
      <button type="submit" onClick={() => handle()}>
        crear WALLET
      </button>
    </div>
  );
};

export default NewWallet;
