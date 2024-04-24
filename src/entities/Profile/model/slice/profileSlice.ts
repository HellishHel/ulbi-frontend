import { createSlice } from "@reduxjs/toolkit";

import { fetchProfileData } from "../services/fetchProfileData/fetchProfileData";
import { ProfileSchema } from "../types/profile";

const initialState: ProfileSchema = {
  readonly: true,
  isLoading: false,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProfileData.pending, (state, action) => {
      state.error = undefined;
      state.isLoading = true;
    });
    builder.addCase(fetchProfileData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchProfileData.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
  },
});
export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;

export default profileSlice.reducer;
