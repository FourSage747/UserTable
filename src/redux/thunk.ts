import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUsers } from "./api";
import { User } from "./reducer";

export const getUsersThunk = createAsyncThunk<User[]>(
  "users/getUsers",
  async () => {
    return await getUsers();
  }
);
