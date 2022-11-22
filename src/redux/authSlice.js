import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

const user = JSON.parse(localStorage.getItem("user"));
// console.log(user,"user")

const initialState = {
  user: user ? user : null,
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};
// console.log(initialState, 'user ini')

// Register user

export const register = createAsyncThunk("/auth/register", async (user, thunkAPI) => {
  try {
    return await authService.registerAPI(user);
  } catch (error) {
    const message =
      (error.response &&
        error.response.data &&
        error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
}
);

// login
export const login = createAsyncThunk("/auth/login", async (user, thunkAPI) => {
  try {
    return await authService.loginAPI(user);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

// logout

export const logout = createAsyncThunk("/auth/logout", async () => {
  await authService.logout();
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        //register  pending
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        //register  fulfilled
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        //register  rejected
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(login.pending, (state) => {
        //login  pending
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        //login  fulfilled
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        //login  rejected
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
