import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { UserState } from "./UserState";
import { fetchUserAccountsThunk } from "./userThunks";

export const userThunksReducers = (
  builder: ActionReducerMapBuilder<UserState>
) => {
  builder.addCase(fetchUserAccountsThunk.fulfilled, (state) => {
    state.name = "Name";
  });
  // builder.addCase(fetchUserInfoThunk.rejected, (state) => {
  //   state.userInfo.status = REQUEST_STATUS.REJECTED;
  // });
  // builder.addCase(fetchUserInfoThunk.pending, (state) => {
  //   state.userInfo.status = REQUEST_STATUS.PENDING;
  // });
};
