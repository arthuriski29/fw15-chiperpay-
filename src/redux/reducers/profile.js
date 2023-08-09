import { createSlice } from "@reduxjs/toolkit";

// import { asyncLoginAction, asyncRegisterAction } from "../actions/auth";

const initialState = {
    email:'',
};

const profile = createSlice({
  name: "profile",
  initialState,
  reducers: {
      saveEmail: (state, action) => {
         state.email = action.payload
      },
      clearProfileState: () => {
      return initialState
      },
  },
});

export const {saveEmail, clearProfileState,} = profile.actions;
export default profile.reducer;