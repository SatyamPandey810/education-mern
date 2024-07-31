// import userSlice from "../store/userSlice";
// import { userReducer } from "./user.reducer";
import { combineReducers } from "@reduxjs/toolkit"
import { userReducer } from "./user.reducer"


const rootReducers = combineReducers({
    user: userReducer,
})
// console.log(userSlice);
export default rootReducers