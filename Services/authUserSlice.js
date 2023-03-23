import { headers } from "@/next.config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "./apiConfig";

const initialState = {
    loading:false,
    users:[],
    loginData:[],
    userProfile:[],
    updateProfile:[],
    changePasswordStatus:"",
    status:"",
    error : ""
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
       if(response.status === 200){
           return response;
       }
    }
    catch(error){
        return rejectWithValue(error?.response?.data);
    }    
})

export const getUserProfile = createAsyncThunk(
    "authUser/getUserProfile",
    async(_,{rejectWithValue})=>{   
    try{
       const response =  await instance.get("/getUserProfile")
       if(response.status === 200){
           return response;
       }
    }
    catch(error){
        return rejectWithValue(error?.response?.data);
    }    
})

export const updateUserProfile = createAsyncThunk(
    "authUser/updateUserProfile",
    async(body,{rejectWithValue})=>{   
    try{
       const response =  await instance.put(`/updateUserProfile/${body.updateId}`,body.data)
       if(response.status === 200){
           return response;
       }
    }
    catch(error){
        return rejectWithValue(error?.response?.data);
    }    
})

export const changeUserPassword = createAsyncThunk(
    "authUser/changeUserPassword",
    async(body,{rejectWithValue})=>{   
    try{
       const response =  await instance.post('/changePassword',body)
       if(response.status === 200){
           return response;
       }
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
            state.loading = true;
        })
        .addCase(loginUser.fulfilled,(state,action)=>{
            state.status = "success";
            state.loading = false;
            state.loginData = action?.payload?.data;
            localStorage.setItem("userToken",action?.payload?.data?.token)
            localStorage.setItem("userId",action?.payload?.data?.Id)
        })
        .addCase(loginUser.rejected,(state,err)=>{
            state.status = "failed";
            state.loading = false;
            state.userError = err?.payload?.error;
        })
        .addCase(getUserProfile.pending,(state)=>{
            state.loading = true;
        })
        .addCase(getUserProfile.fulfilled,(state,action)=>{
            state.loading = false;
            state.userProfile = action.payload.data.user;
        })
        .addCase(getUserProfile.rejected,(state,err)=>{
            state.loading = false;
        })
        .addCase(updateUserProfile.pending,(state)=>{
            state.status = "pending";
            state.loading = true;
        })
        .addCase(updateUserProfile.fulfilled,(state,action)=>{
            state.status = "success";
            state.loading = false;
            state.updateProfile = action.payload.data;
        })
        .addCase(updateUserProfile.rejected,(state,err)=>{
            state.status = "failed";
            state.loading = false;
            state.error = err.payload.error;
        })
        .addCase(changeUserPassword.pending,(state)=>{
            state.status = "pending";
            state.loading = true;
        })
        .addCase(changeUserPassword.fulfilled,(state,action)=>{
            state.status = "success";
            state.loading = false;
            state.changePasswordStatus = action.payload.data;
        })
        .addCase(changeUserPassword.rejected,(state,err)=>{
            state.status = "failed";
            state.loading = false;
            state.error = err.payload.error;
        })
        
    }
})


export default authUserSlice.reducer;