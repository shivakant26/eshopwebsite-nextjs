import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "./apiConfig";

const initialState = {
    users:[],
    loginData:[],
    allUsers:[],
    status:"",
};

export const addNewUser = createAsyncThunk(
    "authUser/addNewUser",
    async(data,{rejectWithValue})=>{
    try{
       const response =  await instance.post("/register",data)
       return response;
    }
    catch(error){
        return rejectWithValue(error?.response?.data);
    }    
})

export const loginUser = createAsyncThunk(
    "authUser/loginUser",
    async(data,{rejectWithValue})=>{   
    try{
       const response =  await instance.post("/login",data)
       return response;
    }
    catch(error){
        return rejectWithValue(error?.response?.data);
    }    
})


const authUserSlice = createSlice({
    name:"authUser",
    initialState,
    extraReducers:(builder) => {
        builder.addCase(addNewUser.pending,(state)=>{
            state.status = "pending";
        })
        .addCase(addNewUser.fulfilled,(state,action)=>{
            state.status = "success";
            state.users = action.payload
        })
        .addCase(addNewUser.rejected,(state,err)=>{
            state.status = "failed";
            state.error = err.payload.error;
        })
        .addCase(loginUser.pending,(state)=>{
            state.status = "pending";
        })
        .addCase(loginUser.fulfilled,(state,action)=>{
            state.status = "success";
            state.admin = action?.payload?.data;
            localStorage.setItem("userToken",action?.payload?.data?.token)
        })
        .addCase(loginUser.rejected,(state,err)=>{
            state.status = "failed";
            state.userError = err.payload.error;
        })
        
    }
})


export default authUserSlice.reducer;