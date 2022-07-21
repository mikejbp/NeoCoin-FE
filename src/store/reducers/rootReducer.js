import { combineReducers } from "redux";

import authReducer from "./authReducers";
import walletReducer from "./walletReducer";

//root de reducer para poder agrupar los diferentes reducer de usuarios y todo
const rootReducer = combineReducers({
  auth: authReducer,
  wallet: walletReducer,
});

export default rootReducer;
