import { createSlice } from "@reduxjs/toolkit";

// import { asyncLoginAction, asyncRegisterAction } from "../actions/auth";

const initialState = {
    email:'',
};

const transfer = createSlice({
  name: "transfer",
  initialState,
  reducers: {
      setRecipient: (state, action) =>{
          state.user = action.payload;
      },
      setAmount: (state, action) =>{
          state.amount = action.payload;
      },
      setNote: (state, action) =>{
          state.note = action.payload;
      },
      clearTransferState: () =>{
          return initialState;
      },
  }
});

export const {setRecipient, setAmount, setNote, clearTransferState } = transfer.actions;
export default transfer.reducer;