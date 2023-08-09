import { combineReducers } from "@reduxjs/toolkit";
// import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'
import auth from './auth'
import profile from './profile'
import transfer from './transfer'
// import profileReducer from "./profile"

// const authConfig = {
//     key:'auth',
//     storage
// }

const reducer = combineReducers ({
    auth,
    profile,
    transfer
})


export default reducer 