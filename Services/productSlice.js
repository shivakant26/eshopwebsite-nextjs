import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "./apiConfig";

const initialState = {
    loading:false,
    products:[],
    additem : [],
    getitem : [],
    status:"",
    error:""
};

export const getAllProduct = createAsyncThunk(
    "product/getAllProduct",
    async(_,{rejectWithValue})=>{
    try{
       const response =  await instance.get("/dashGetProduct")
       if(response.status === 200){
           return response;
       }
    }
    catch(error){
        return rejectWithValue(error)
    }    
})

export const addToCart = createAsyncThunk(
    "product/addToCart",
    async(object,{rejectWithValue})=>{
    try{
       const response =  await instance.post("/cart",object)
       return response;
    }
    catch(error){
        return rejectWithValue(error?.response?.data)
    }    
})

export const getCartProduct = createAsyncThunk(
    "product/getCartProduct",
    async()=>{
    try{
       const response =  await instance.get("/cart/get")
       return response;
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
            state.loading = true;
            state.error = ""
        })
        .addCase(getAllProduct.fulfilled,(state,action)=>{
            state.loading = false;
            state.products = action.payload.data.products;
            state.error=""
        })
        .addCase(getAllProduct.rejected,(state,er)=>{
            state.loading = false;
            state.error=er.payload;
        })
        .addCase(addToCart.pending,(state)=>{
            state.status = "pending";
        })
        .addCase(addToCart.fulfilled,(state,action)=>{
            state.status = "success";
            state.error = ""
            state.additem = action.payload;
        })
        .addCase(addToCart.rejected,(state,err)=>{
            state.status = "failed";
            state.error = err.payload.message;
        })
        .addCase(getCartProduct.pending,(state)=>{
            state.status = "pending";
        })
        .addCase(getCartProduct.fulfilled,(state,action)=>{
            state.status = "success";
            state.error = ""
            state.getitem = action.payload;
        })
        .addCase(getCartProduct.rejected,(state,err)=>{
            state.status = "failed";
            state.error = err.payload.message;
        })
    }
})


export default productSlice.reducer;