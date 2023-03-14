import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "./apiConfig";

const initialState = {
  authLoading : false,
  isAdmin: "",
  allUsers: [],
  adminProfileData: [],
  unBlock: [],
  block: [],
  updateRole: [],
  profileStatus:"",
  status: "",
  error: "",
};

export const adminLogin = createAsyncThunk(
  "auth/adminLogin",
  async (data, { rejectWithValue }) => {
    try {
      const response = await instance.post("/login", data);
      if(response.status === 200){
        return response;
      }
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const allRegisterUser = createAsyncThunk(
  "authUser/allRegisterUser",
  async () => {
    try {
      const response = await instance.get("/getALLAuth");
      return response;
    } catch (error) {
      return error;
    }
  }
);

export const getAdminProfile = createAsyncThunk(
  "authUser/getAdminProfile",
  async () => {
    try {
      const response = await instance.get("/getAdminProfile");
      return response;
    } catch (error) {
      return error;
    }
  }
);

export const verifyUser = createAsyncThunk(
  "authUser/verifyUser",
  async (_id, { rejectWithValue }) => {
    try {
      const response = await instance.put(`/unBlockAuth/${_id}`);
      return response;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const UnVerifyUser = createAsyncThunk(
  "authUser/UnVerifyUser",
  async (body, { rejectWithValue }) => {
    try {
      const response = await instance.put(`/blockAuth/${body.id}`, {
        email: body.email,
      });
      return response;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const roleAsAdmin = createAsyncThunk(
  "authUser/roleAsAdmin",
  async (id, { rejectWithValue }) => {
    try {
      const response = await instance.put(`/madeAdmin/${id}`);
      return response;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);
export const roleAsUser = createAsyncThunk(
  "authUser/roleAsUser",
  async (id, { rejectWithValue }) => {
    try {
      const response = await instance.put(`/madeUser/${id}`);
      return response;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const updateProfile = createAsyncThunk(
  "authUser/updateProfile",
  async (body, { rejectWithValue }) => {
    try {
      const response = await instance.put(
        `/updateAdminProfile/${body.updateId}`,
        body.data
      );
      return response;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);
const authSlice = createSlice({
  name: "authAdmin",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(adminLogin.pending, (state) => {
        state.authLoading = true
      })
      .addCase(adminLogin.fulfilled, (state, action) => {
        state.authLoading = false
        state.isAdmin = action?.payload?.data?.success;
        localStorage.setItem("adminToken", action?.payload?.data?.token);
      })
      .addCase(adminLogin.rejected, (state, err) => {
        state.authLoading = false
        state.error = err.payload.error;
      })
      .addCase(allRegisterUser.pending, (state) => {
        state.status = "pending";
      })
      .addCase(allRegisterUser.fulfilled, (state, action) => {
        state.status = "success";
        state.allUsers = action?.payload?.data;
      })
      .addCase(allRegisterUser.rejected, (state, err) => {
        state.status = "failed";
      })
      .addCase(getAdminProfile.pending, (state) => {
        state.status = "pending";
        state.authLoading = true
      })
      .addCase(getAdminProfile.fulfilled, (state, action) => {
        state.status = "success";
        state.authLoading = false
        state.adminProfileData = action?.payload?.data;
      })
      .addCase(getAdminProfile.rejected, (state, err) => {
        state.status = "failed";
        state.authLoading = false
      })
      .addCase(verifyUser.pending, (state) => {
        state.status = "pending";
        state.error = "";
        state.unBlock = "";
      })
      .addCase(verifyUser.fulfilled, (state, action) => {
        state.status = "success";
        state.unBlock = action?.payload?.data;
        state.error = "";
      })
      .addCase(verifyUser.rejected, (state, err) => {
        state.status = "failed";
        state.error = err.payload.message;
        state.unBlock = "";
      })
      .addCase(UnVerifyUser.pending, (state) => {
        state.status = "pending";
        state.error = "";
        state.block = "";
      })
      .addCase(UnVerifyUser.fulfilled, (state, action) => {
        state.status = "success";
        state.block = action?.payload?.data;
        state.error = "";
      })
      .addCase(UnVerifyUser.rejected, (state, err) => {
        state.status = "failed";
        state.error = err.payload.message;
        state.block = "";
      })
      .addCase(roleAsAdmin.pending, (state) => {
        state.authLoading = true;
        state.error = "";
        state.updateRole = "";
      })
      .addCase(roleAsAdmin.fulfilled, (state, action) => {
        state.authLoading = false;
        state.updateRole = action?.payload?.data;
        state.error = "";
      })
      .addCase(roleAsAdmin.rejected, (state, err) => {
        state.authLoading = false;
        state.error = err.payload.message;
        state.updateRole = "";
      })
      .addCase(roleAsUser.pending, (state) => {
        state.authLoading = true;
        state.error = "";
        state.updateRole = "";
      })
      .addCase(roleAsUser.fulfilled, (state, action) => {
        state.authLoading = false;
        state.updateRole = action?.payload?.data;
        state.error = "";
      })
      .addCase(roleAsUser.rejected, (state, err) => {
        state.authLoading = false;
        state.error = err.payload.message;
        state.updateRole = "";
      })
      .addCase(updateProfile.pending, (state) => {
        state.authLoading = true;
        state.error = "";
        state.profileStatus = "";
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.authLoading = false
        state.profileStatus = action?.payload?.data;
        state.error = "";
      })
      .addCase(updateProfile.rejected, (state, err) => {
        state.authLoading = false;
        state.error = err.payload.message;
        state.profileStatus = "";
      });
  },
});

export default authSlice.reducer;
