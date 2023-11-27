import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";

const store = configureStore({
  reducer: { 
    auth: authSlice ,
    // post:postSlice
    // add more slice ofr post 
  }
});

export default store;
