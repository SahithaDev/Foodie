import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
const appStore = configureStore({
  reducer: {
    //THIS IS THE COMBINATION OF ALL THE REDUCERS
    cart: cartReducer,
    //user : userReducer
  },
});
export default appStore;
