import { createSlice } from "@reduxjs/toolkit";

// import { asyncLoginAction, asyncRegisterAction } from "../actions/auth";

const initialState = {
    email:'',
};

const transfer = createSlice({
  name: "transfer",
  initialState,
  reducers: {
      saveEmail: (state, action) => {
         state.email = action.payload
      },
      clearTransferState: () => {
      return initialState
      },
  },
});

export const {saveEmail, clearTransferState,} = transfer.actions;
export default transfer.reducer;