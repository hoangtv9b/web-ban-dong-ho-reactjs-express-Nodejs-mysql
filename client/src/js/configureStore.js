import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import cartReducer from "./cartReducer";
import loginReducer from "./loginReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  user: loginReducer
});

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);