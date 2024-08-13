import { call, put, takeLatest } from "redux-saga/effects";
import getSubCategoryServices from "../services/subCategoryGet-services";
import { getSubCategoryError, getSubCategorySuccess } from "../actions/getSubCategory.action";
import { SUBCATEGORY_GET_START } from "../constants/courses/subCategory-constants";

function* allSubCategory() {
    try {
        const data = yield call(getSubCategoryServices)
        yield put(getSubCategorySuccess(data))
    } catch (error) {
        yield put(getSubCategoryError(error.message))
    }
}

function* getAllSubCategorySaga() {
    yield takeLatest(SUBCATEGORY_GET_START, allSubCategory)
}
export default getAllSubCategorySaga