import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "./UserState";
import { APP_STATES } from "../sliceNames";
import { userReducers } from "./userReducers";
import { userThunksReducers } from "./userThunksReducers";

export const userInitialState: UserState = {
  name: "",
};

export const userSlice = createSlice({
  name: APP_STATES.USER_STATE,
  initialState: userInitialState,
  reducers: userReducers,
  extraReducers: userThunksReducers,
});

export const { setName } = userSlice.actions;
export default userSlice;
