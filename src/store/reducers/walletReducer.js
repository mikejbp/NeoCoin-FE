import { toast } from "react-toastify";
//reducer de jornadas

const walletReducer = (wallets = [], action) => {
  switch (action.type) {
    case "GET_WALLET":
      return action.wallets.data;
    case "GET_WALLET_ADMIN":
      return action.wallets.data;
    case "ADD_WALLET":
      toast.success("WALLET add..", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return [action.wallet.data, ...wallets];
    case "UPDATE_WALLET":
      toast.success("jornada updated...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return wallets.map((wallet) =>
        wallet._id === action.wallet.data._id ? action.wallet.data : wallet
      );
    case "CHECK_WALLET":
      toast.success("se acepto la WALLET...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return wallets.map((wallet) =>
        wallet._id === action.wallet.data._id ? action.wallet.data : wallet
      );
    case "DELETE_WALLET":
      toast.success("WALLET deleted...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return wallets.filter((wallet) => wallet._id !== action.id);
    case "CLEAR_WALLET":
      return [];
    default:
      return wallets;
  }
};

export default walletReducer;
