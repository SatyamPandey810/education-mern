import { combineReducers } from "@reduxjs/toolkit"
import userReducer from "./user.reducer"
import allUserReducer from "./allUser.reducer"
import logoutUserReducer from "./userLogut.reducer"
import uploadCategoryReducer from "./categoryUpload.reducer"
import getAllCategoryReducer from "./categoryGet.reducer"


const rootReducers = combineReducers({
    user: userReducer,
    allUser: allUserReducer,
    logoutUser: logoutUserReducer,
    uploadCategory: uploadCategoryReducer,
    allCategory: getAllCategoryReducer
})
// console.log(userSlice);
export default rootReducers