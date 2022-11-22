import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import goalService from "./goalService";

const initialState = {
  mygoal: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

// create goal
export const createGoal = createAsyncThunk("auth/creategoal", async (usergoal, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token
    return await goalService.createGoal(usergoal, token)
  } catch (error) {
    const message = error.response &&
      error.response.data &&
      error.response.data.message ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message)
  }
})
// create goal
export const deleteGoal = createAsyncThunk("auth/deletegoal", async (id, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token
    return await goalService.deleteGoal(id, token)
  } catch (error) {
    const message = error.response &&
      error.response.data &&
      error.response.data.message ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message)
  }
})

const goalSlice = createSlice({
  name: "goal",
  initialState,
  reducers: {
    reset: (state) => initialState
  },
  extraReducers: (builder) => {
    builder
      .addCase(createGoal.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createGoal.fulfilled, (state, action) => {
        state.isSuccess = true
        state.isLoading = false
        state.mygoal.push(action.payload)
      })
      .addCase(createGoal.rejected, (state, action) => {
        state.isError = true
        state.isLoading = false
        state.message = action.payload
        state.mygoal = null
      })
      .addCase(deleteGoal.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteGoal.fulfilled, (state, action) => {
        state.isSuccess = true
        state.isLoading = false
        state.mygoal = state.mygoal.filter((ele) => ele._id !== action.payload.id)
        console.log(action.payload.id, "slice")
      })
      .addCase(deleteGoal.rejected, (state, action) => {
        state.isError = true
        state.isLoading = false
        state.message = action.payload
        state.mygoal = null
      })

  },
});

export const { reset } = goalSlice.actions;
export default goalSlice.reducer;
