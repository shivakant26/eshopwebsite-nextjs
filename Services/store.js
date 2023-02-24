const { configureStore } = require("@reduxjs/toolkit");
const { default: productSlice } = require("./productSlice");

const store = configureStore({
    reducer:{
        product : productSlice
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;