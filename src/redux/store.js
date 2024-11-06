import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartReducer from "./cartItemDataSlicer";
import favoraitReducer from "./favoraitItemData";

//persist configuration
const cartPersistConfig = {
  key: "data", //key to save cart data in local storage
  storage,
};
const favoraitPersistConfig = {
  key: "favoraitData", // key to save favorait data in local storage
  storage,
};

//create persisted reducer
const persistCartReduce = persistReducer(cartPersistConfig, cartReducer);
const persistFavoraitreducer = persistReducer(favoraitPersistConfig,favoraitReducer);

// combined reducers
const combineReducer = combineReducers({
  cartData: persistCartReduce, //cart slicer
  favoraitData: persistFavoraitreducer, // favorait slicer
});

// create redux store
export const store = configureStore({
  reducer: combineReducer,
});

// create the persistor
export const persistor = persistStore(store);
