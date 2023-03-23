import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../apiConfig";

const initialState = {
  productLoading: false,
  getAdminProduct: [],
  updateProduct: [],
  singleProduct: [],
  profileStatus: "",
  productStatus: "idle",
  error: "",
};

// get All Product added by Admin
export const getAdminAddedProduct = createAsyncThunk(
  "adminProduct/getAdminAddedProduct",
  async (_, { rejectWithValue }) => {
    try {
      const response = await instance.get("/get");
      if (response.status === 200) {
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
  async (id, { rejectWithValue }) => {
    try {
      const response = await instance.get(`/get/${id}`);
      if (response.status === 200) {
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
  async ({ data, id }, { rejectWithValue }) => {
    try {
      const response = await instance.put(`/update/${id}`, data);
      if (response.status === 200) {
        return response;
      }
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);
// add new product by admin
export const addNewProduct = createAsyncThunk(
  "adminProduct/addNewProduct",
  async (body, { rejectWithValue }) => {
    try {
      const response = await instance.post("/post", body);
      if (response.status === 200) {
        return response;
      }
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// remove product by admin

export const removeProducts = createAsyncThunk(
  "adminProduct/removeProducts",
  async (id, { rejectWithValue }) => {
    try {
      const response = await instance.delete(`/delete/${id}`);
      if (response.status === 200) {
        return response;
      }
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const adminProductSlice = createSlice({
  name: "adminProduct",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAdminAddedProduct.pending, (state) => {
        state.productStatus = "";
        state.authLoading = true;
        state.error = "";
      })
      .addCase(getAdminAddedProduct.fulfilled, (state, action) => {
        state.productStatus = "";
        state.authLoading = false;
        state.error = "";
        state.getAdminProduct = action?.payload?.data?.post;
      })
      .addCase(getAdminAddedProduct.rejected, (state, err) => {
        state.productStatus = "";
        state.authLoading = false;
        state.error = err.payload.message;
      })
      .addCase(updateAdminAddedProduct.pending, (state) => {
        state.productStatus = "pending";
        state.authLoading = true;
        state.error = "";
        state.updateProduct = "";
      })
      .addCase(updateAdminAddedProduct.fulfilled, (state, action) => {
        state.productStatus = "success";
        state.authLoading = false;
        state.error = "";
        state.updateProduct = action.payload.data.success;
      })
      .addCase(updateAdminAddedProduct.rejected, (state, err) => {
        state.productStatus = "failed";
        state.authLoading = false;
        state.error = err.payload;
      })
      .addCase(getSingleAdminAddedProduct.pending, (state) => {
        state.productStatus = "";
        state.authLoading = true;
        state.error = "";
      })
      .addCase(getSingleAdminAddedProduct.fulfilled, (state, action) => {
        state.productStatus = "";
        state.authLoading = false;
        state.error = "";
        state.singleProduct = action?.payload?.data?.post;
      })
      .addCase(getSingleAdminAddedProduct.rejected, (state, err) => {
        state.productStatus = "";
        state.authLoading = false;
        state.error = err.payload;
      })
      .addCase(addNewProduct.pending, (state) => {
        state.productStatus = "pending";
        state.message = "";
        state.error = "";
      })
      .addCase(addNewProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.productStatus = "success";
        state.message = action.payload.data.message;
      })
      .addCase(addNewProduct.rejected, (state, err) => {
        state.productStatus = "failed";
        state.loading = false;
        state.error = err.payload.error;
      })
      .addCase(removeProducts.pending, (state) => {
        state.productStatus = "pending";
        state.error = "";
      })
      .addCase(removeProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.productStatus = "success";
        state.message = action.payload.data.message;
      })
      .addCase(removeProducts.rejected, (state, err) => {
        state.productStatus = "failed";
        state.loading = false;
        state.error = err.payload.error;
      });
  },
});

export default adminProductSlice.reducer;
