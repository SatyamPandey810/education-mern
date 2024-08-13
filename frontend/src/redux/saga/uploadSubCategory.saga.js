import { call, put, takeLatest } from "redux-saga/effects";
import uploadSubCategoryHandler from "../services/subCategoryUpload.sevices";
import { uploadSubCategoryError, uploadSubCategorySuccess } from "../actions/uploadSubCategory.action";
import { SUBCATEGORY_UPLOAD_START } from "../constants/courses/subCategory-constants";

function* uploadSubCategory(action) {
    try {
        const response = yield call(uploadSubCategoryHandler, action.payload)
        yield put(uploadSubCategorySuccess(response))
    } catch (error) {
        yield put(uploadSubCategoryError(error.message))

    }
}

function* uploadSubCategorySaga() {
    yield takeLatest(SUBCATEGORY_UPLOAD_START, uploadSubCategory)
}

export default uploadSubCategorySaga