import { toast } from "react-toastify";
import jwtDecode from "jwt-decode";

const initialState = {
  token: localStorage.getItem("token"),
  name: null,
  email: null,
  _id: null,
};

//reducer de usuario
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGN_IN":

    case "SIGN_UP":
    case "USER_LOADED":
      toast("hello...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      const user = jwtDecode(action.token);

      return {
        ...initialState,
        token: action.token,
        tipo: user.tipo,
        name: user.name,
        email: user.email,
        _id: user._id,
      };
    case "SIGN_OUT":
      localStorage.removeItem("token");
      toast("Nos vemos...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return {
        tipo: null,
        token: null,
        name: null,
        email: null,
        _id: null,
      };
    default:
      return state;
  }
};

export default authReducer;
