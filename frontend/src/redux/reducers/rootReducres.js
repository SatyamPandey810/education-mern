import { combineReducers } from "@reduxjs/toolkit"
import userReducer from "./user.reducer"
import allUserReducer from "./allUser.reducer"
import logoutUserReducer from "./userLogut.reducer"
import uploadCategoryReducer from "./categoryUpload.reducer"
import getAllCategoryReducer from "./categoryGet.reducer"
import updateCategoryreducer from "./update.category.reducer"
import uploadSubCategoryReducer from "./subCategoryUpload.reducer"
import getAllSubCategoryReducer from "./subCategoryGet.reducer"
import courseUploadReducer from "./courseUpload.reducer"
import getAllCourseReducer from "./courseGet.reducer"
import categoryDeleteReducer from "./categoryDelete.reducer"
import updateSubCategoryReducer from "./updateSubCategory.reducer"
import deleteSubCategoryReducer from "./subCategoryDelete.reducer"
import updateCourseReducer from "./updateCourse.reducer"
import findCourseByCategoryAndSubcategoryReducer from "./findCourseByCategoryAndSubcategory.reducer"
import singleCourseReducer from "./singleCourse.reducer"
import addToinquiryReducer from "./addToInquiry.reducer"
import transactionInitiateReducer from "./transaction/transactionInitiate.reducer"
import allPaymentReducer from "./transaction/getAllTransaction.reducer"
import deleteCourseReducer from "./courseDelete.reducer"
import getInquriesReducer from "./getInquries.reducer"
import inquriesDeleteReducer from "./inquriesDelete.reducer"
import deleteTransactionReducer from "./transaction/deleteTransaction.reducer"


const rootReducers = combineReducers({
    user: userReducer,
    allUser: allUserReducer,
    logoutUser: logoutUserReducer,
    uploadCategory: uploadCategoryReducer,
    allCategory: getAllCategoryReducer,
    updateCategory: updateCategoryreducer,
    uploadSubCategory: uploadSubCategoryReducer,
    allSubCategory: getAllSubCategoryReducer,
    uploadCourse: courseUploadReducer,
    allCourse: getAllCourseReducer,
    deleteCourse: deleteCourseReducer,
    deleteCategory: categoryDeleteReducer,
    updateSubCategory: updateSubCategoryReducer,
    deleteSubCategory: deleteSubCategoryReducer,
    updateCourse: updateCourseReducer,
    findCourseByCategoryAndSubcategory: findCourseByCategoryAndSubcategoryReducer,
    singleCourse: singleCourseReducer,
    addToInquiries: addToinquiryReducer,
    transactionUpload: transactionInitiateReducer,
    allTransaction: allPaymentReducer,
    allInquries: getInquriesReducer,
    deleteinqury: inquriesDeleteReducer,
    deleteTransaction: deleteTransactionReducer
})
export default rootReducers