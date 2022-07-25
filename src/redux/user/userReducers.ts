import { PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "./UserState";

export const userReducers = {
  setName(state: UserState, action: PayloadAction<string>) {
    state.name = action.payload;
  },
};
