import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Profile, ProfileSchema } from "../types/profile";

const initialState: ProfileSchema = {
  readonly: true,
  isLoading: false,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
});
export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;

export default profileSlice.reducer;
