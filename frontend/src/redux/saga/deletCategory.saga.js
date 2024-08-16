import { call, put, takeLatest } from "redux-saga/effects";
import deleteCategoryService from "../services/categoryDelete-service";
import { DELETE_CATEGORY_START } from "../constants/courses/category-constants";
import { deleteCategoryError, deleteCategorySuccess } from "../actions/deleteCategory.action";

function* deleteCategory(action) {
    try {
        const response = yield call(deleteCategoryService, action.payload)
        console.log(response);
        
        yield put(deleteCategorySuccess(response))
    } catch (error) {
        yield put(deleteCategoryError(error.message))
    }
}

function* deleteCategorySaga() {
    yield takeLatest(DELETE_CATEGORY_START, deleteCategory)
}

export default deleteCategorySaga