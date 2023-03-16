import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../apiConfig";

const initialState = {
  productLoading : false,
  getAdminProduct:[],
  updateProduct:[],
  singleProduct:[],
  profileStatus:"",
  productStatus: "idle",
  error: "",
};

// get All Product added by Admin
export const getAdminAddedProduct = createAsyncThunk(
  "adminProduct/getAdminAddedProduct",
  async (_, { rejectWithValue }) => {
    try {
      const response = await instance.get("/get");
      if(response.status === 200){
        return response;
      }
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);
// get single product by Admin with id
export const getSingleAdminAddedProduct = createAsyncThunk(
  "adminProduct/getSingleAdminAddedProduct",
  async (id , { rejectWithValue }) => {
    try {
      const response = await instance.get(`/get/${id}`);
      if(response.status === 200){
        return response;
      }
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);
// Update admin product by Admin
export const updateAdminAddedProduct = createAsyncThunk(
  "adminProduct/updateAdminAddedProduct",
  async ({data,id} , { rejectWithValue }) => {
    console.log(756575655655,data,id)
    try {
      const response = await instance.put(`/update/${id}`,data);
      if(response.status === 200){
        return response;
      }
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);
const adminProductSlice = createSlice({
  name: "adminProduct",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAdminAddedProduct.pending, (state) => {
        state.productStatus = ""
        state.authLoading = true;
        state.error = "";
      })
      .addCase(getAdminAddedProduct.fulfilled, (state, action) => {
        state.productStatus = ""
        state.authLoading = false
        state.error = "";
        state.getAdminProduct = action?.payload?.data?.post;
      })
      .addCase(getAdminAddedProduct.rejected, (state, err) => {
        state.productStatus = ""
        state.authLoading = false;
        state.error = err.payload.message;
      })
      .addCase(updateAdminAddedProduct.pending, (state) => {
        state.productStatus = "pending"
        state.authLoading = true;
        state.error = "";
      })
      .addCase(updateAdminAddedProduct.fulfilled, (state, action) => {
        state.productStatus = "success"
        state.authLoading = false
        state.error = "";
        state.updateProduct = action.payload.data.success;
      })
      .addCase(updateAdminAddedProduct.rejected, (state, err) => {
        state.productStatus = "failed"
        state.authLoading = false;
        state.error = err.payload;
      })
      .addCase(getSingleAdminAddedProduct.pending, (state) => {
        state.productStatus = ""
        state.authLoading = true;
        state.error = "";
      })
      .addCase(getSingleAdminAddedProduct.fulfilled, (state, action) => {
        state.productStatus = ""
        state.authLoading = false
        state.error = "";
        state.singleProduct = action?.payload?.data?.post;
      })
      .addCase(getSingleAdminAddedProduct.rejected, (state, err) => {
        state.productStatus = ""
        state.authLoading = false;
        state.error = err.payload;
      });
  },
});

export default adminProductSlice.reducer;