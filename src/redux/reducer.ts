import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getUsersThunk } from "./thunk";

interface Geo {
  lat: string;
  lng: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

interface UsersState {
  items: User[];
  isLoading: boolean;
  error: string | null;
}

interface State {
  users: UsersState;
  filter: string;
}

const initialState: State = {
  users: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: "",
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsersThunk.pending, (state) => {
        state.users.isLoading = true;
      })
      .addCase(
        getUsersThunk.fulfilled,
        (state, action: PayloadAction<User[]>) => {
          state.users.isLoading = false;
          state.users.items = action.payload;
          state.users.error = null;
        }
      )
      .addCase(getUsersThunk.rejected, (state, action) => {
        state.users.isLoading = false;
        state.users.error = action.error.message || "Failed to fetch users";
      });
  },
});

export const userReducer = userSlice.reducer;
export const { setFilter } = userSlice.actions;
