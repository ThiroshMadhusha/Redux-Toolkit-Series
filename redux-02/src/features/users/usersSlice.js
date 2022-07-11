import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Thirosh" },
  { id: "1", name: "Author" },
  { id: "2", name: "Admin" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
