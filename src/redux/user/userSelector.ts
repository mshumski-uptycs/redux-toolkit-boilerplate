import { createSelector } from "@reduxjs/toolkit";
import { UserState } from "./UserState";

export const userStateSelector = (state: { user: UserState }) => state.user;
