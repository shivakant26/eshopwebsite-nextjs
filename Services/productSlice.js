import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "./apiConfig";

const initialState = {
    loading:false,
    products:[],
    addItemCart : [],
    addItemProduct:[],
    message:"",
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

export const addNewProduct = createAsyncThunk(
    "product/addNewProduct",
    async(body,{rejectWithValue})=>{
    try{
       const response =  await instance.post("/post",body)
       if(response.status === 200){
           return response;
       }
    }
    catch(error){
        return rejectWithValue(error.response.data)
    }    
})

export const deleteCartItem = createAsyncThunk(
    "product/deleteCartItem",
    async(id,{rejectWithValue})=>{
    try{
       const response =  await instance.delete(`/cart/delete?itemId=${id}`)
       if(response.status === 200){
           return response;
       }
    }
    catch(error){
        return rejectWithValue(error.response.data)
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
            state.loading = true;
            state.authError = "";
        })
        .addCase(addToCart.fulfilled,(state,action)=>{
            state.loading = false;
            state.error = ""
            state.authError = "";
            state.addItemCart = action.payload.data;
        })
        .addCase(addToCart.rejected,(state,err)=>{
            state.loading = false;
            state.error = err.payload.message;
            state.authError = err.payload.error;
        })
        .addCase(getCartProduct.pending,(state)=>{
            state.status = "pending";
        })
        .addCase(getCartProduct.fulfilled,(state,action)=>{
            state.status = "success";
            state.error = ""
            state.getitem = action.payload?.data;
        })
        .addCase(getCartProduct.rejected,(state,err)=>{
            state.status = "failed";
            state.error = err.payload.message;
        })
        .addCase(deleteCartItem.pending,(state)=>{
            state.loading = true;
        })
        .addCase(deleteCartItem.fulfilled,(state,action)=>{
            state.loading = false;
            state.error = ""
            state.deleteCart = action.payload;
        })
        .addCase(deleteCartItem.rejected,(state,err)=>{
            state.loading = false;
            state.error = err.payload.message;
        })
        .addCase(addNewProduct.pending,(state)=>{
            state.loading = true;
            state.message = ""
            state.error = ""
        })
        .addCase(addNewProduct.fulfilled,(state,action)=>{
            state.loading = false;
            state.error = ""
            state.addItemProduct = action.payload.data;
            state.message = action.payload.data.message;
            state.status = action.payload.data.status
        })
        .addCase(addNewProduct.rejected,(state,err)=>{
            state.loading = false;
            state.error = err.payload.error;
        })
    }
})


export default productSlice.reducer;