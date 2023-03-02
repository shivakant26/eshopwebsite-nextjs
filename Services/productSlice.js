import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "./apiConfig";

const initialState = {
    products:[],
    status:"",
};

export const getAllProduct = createAsyncThunk(
    "product/getAllProduct",
    async()=>{
    try{
       const response =  await instance.get("/dashGetProduct")
       return response?.data?.products;
    }
    catch(error){
        return error
    }    
})

const productSlice = createSlice({
    name:"product",
    initialState,
    extraReducers:(builder) => {
        builder.addCase(getAllProduct.pending,(state)=>{
            state.status = "pending";
        })
        .addCase(getAllProduct.fulfilled,(state,action)=>{
            state.status = "success";
            state.products = action.payload;
        })
        .addCase(getAllProduct.rejected,(state)=>{
            state.status = "failed";
        })
    }
})


export default productSlice.reducer;