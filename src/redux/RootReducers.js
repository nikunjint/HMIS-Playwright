// rootReducer.js
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "../services/auth/authSlice";

import homeDataSlice from "../services/changeState/HomeSlice";
import visitDataSlice from '../services/changeState/Visitpath'
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["homeData","auth",'visitData'], // specify the slice(s) of state to persist
};

const rootReducer = combineReducers({
  homeData: homeDataSlice,
  auth:authReducer,
  visitData:visitDataSlice
});

export default persistReducer(persistConfig, rootReducer);