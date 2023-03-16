import { configureStore } from "@reduxjs/toolkit";
import adminProductSlice from "./Admin/adminProductSlice";
import authSlice from "./Admin/authSlice";
import authUserSlice from "./authUserSlice";
import productSlice from "./productSlice";


const store = configureStore({
    reducer:{
        productSlice : productSlice,
        auth : authSlice,
        adminProduct : adminProductSlice,
        authUser : authUserSlice
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;