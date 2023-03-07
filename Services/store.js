import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import authUserSlice from "./authUserSlice";
import productSlice from "./productSlice";


const store = configureStore({
    reducer:{
        productSlice : productSlice,
        auth : authSlice,
        authUser : authUserSlice
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;