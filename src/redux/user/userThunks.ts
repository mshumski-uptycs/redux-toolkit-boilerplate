import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserActionTypes } from "./userActionTypes";

export const fetchUserAccountsThunk = createAsyncThunk(
  UserActionTypes.CHANGE_USER_NAME,
  async ({ title, postBody }: { title: string; postBody: string }) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        body: postBody,
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const body = await response.json();

    return body;
  }
);
