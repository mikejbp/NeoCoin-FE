import axios from "axios";
import { url, setHeaders } from "../../api";
import { toast } from "react-toastify";

//hace la peticion get para buscar jornada por usuario
export const getWallet = () => {
  return (dispatch) => {
    axios
      .get(`${url}/wallet`, setHeaders())
      .then((wallet) => {
        dispatch({
          type: "GET_WALLET",
          wallet,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
//hace la peticion get
export const getWalletAdmin = () => {
  return (dispatch) => {
    axios
      .get(`${url}/wallet/admin`, setHeaders())
      .then((wallet) => {
        dispatch({
          type: "GET_WALLET_ADMIN",
          wallet,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
//añade la  jornada
export const addWallet = (newWallet) => {
  return (dispatch, getState) => {
    const user = getState().auth.name;
    const uid = getState().auth._id;
    axios
      .post(`${url}/wallet`, { ...newWallet, user, uid }, setHeaders())
      .then((wallet) => {
        dispatch({
          type: "ADD_WALLET",
          wallet,
        });
      })
      .catch((error) => {
        console.log(error.response);

        toast.error(error.response?.data, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };
};
//actualiza la  jornada
export const updateWallet = (updatedWallet, id) => {
  return (dispatch) => {
    axios
      .put(`${url}/wallet/${id}`, updatedWallet, setHeaders())
      .then((wallet) => {
        dispatch({
          type: "UPDATE_WALLET",
          wallet,
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response?.data, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };
};
//elimina la  jornada
export const deleteWallet = (id) => {
  return (dispatch) => {
    axios
      .delete(`${url}/Wallet/${id}`, setHeaders())
      .then(() => {
        dispatch({
          type: "DELETE_WALLET",
          id,
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response?.data, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };
};
//checka la  jornada
export const checkWallet = (id) => {
  return (dispatch) => {
    axios
      .patch(`${url}/wallet/${id}`, {}, setHeaders())
      .then((wallet) => {
        dispatch({
          type: "CHECK_WALLET",
          wallet,
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response?.data, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };
};
