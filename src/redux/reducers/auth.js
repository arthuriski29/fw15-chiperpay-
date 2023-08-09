import { createSlice } from "@reduxjs/toolkit";

// import { asyncLoginAction, asyncRegisterAction } from "../actions/auth";

const initialState = {
    email:'',
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
      saveEmail: (state, action) => {
         state.email = action.payload
      },
      clearAuthState: () => {
      return initialState
      },
  },
});

export const {saveEmail, clearAuthState,} = auth.actions;
export default auth.reducer;