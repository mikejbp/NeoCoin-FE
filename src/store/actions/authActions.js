import axios from "axios";
import { url } from "../../api";
import { toast } from "react-toastify";

export const signUp = (user) => {
  return (dispatch) => {
    axios
      .post(`${url}/singup`, user)
      .then((token) => {
        localStorage.setItem("token", token.data);

        dispatch({
          type: "SIGN_UP",
          token: token.data,
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

//aqui se plantea la peticion para hacer el SingIn de empleado y guarda el token ewn el local storage
export const signIn = (email, password) => {
  return (dispatch) => {
    axios
      .post(`${url}/signin`, { email, password })
      .then((token) => {
        localStorage.setItem("token", token.data);

        dispatch({
          type: "SIGN_IN",
          token: token.data,
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

//aqui se plantea la peticion para hacer el SingOut de empleado y se borra el token
export const signOut = () => {
  return (dispatch) => {
    dispatch({
      type: "CLEAR_TODOS",
    });

    dispatch({
      type: "SIGN_OUT",
    });
  };
};

//recarga empleado por el local storage donde guardamos el token
export const loadUser = () => {
  return (dispatch, getState) => {
    const token = getState().auth.token;

    if (token) {
      dispatch({
        type: "USER_LOADED",
        token,
      });
    } else return null;
  };
};
