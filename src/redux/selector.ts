import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { User } from "./reducer";

export const usersSelector = (state: RootState): User[] =>
  state.users.users.items;
export const getFilter = (state: RootState): string => state.users.filter;

export const filterSelector = createSelector(
  [usersSelector, getFilter],
  (users, filter) => {
    if (!users) {
      return [];
    }
    return users.filter(({ name, username, email, phone }) =>
      [name, username, email, phone].some((field) =>
        field.toLowerCase().includes(filter.toLowerCase())
      )
    );
  }
);
