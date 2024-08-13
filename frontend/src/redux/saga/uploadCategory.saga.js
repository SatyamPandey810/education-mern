const { call, put, takeLatest } = require("redux-saga/effects");
const { uploadCategoryHandller } = require("../services/categoryUpload-services");
const { getCategoryUploadSuccess, getCategoryUploadError } = require("../actions/uploadCategory.action");
const { GET_CATEGORY_UPLOAD_START } = require("../constants/courses/category-constants");

function* getUploadCategory(action) {
    try {
        const response = yield call(uploadCategoryHandller, action.payload)
        yield put(getCategoryUploadSuccess(response))
    } catch (error) {
        yield put(getCategoryUploadError(error.message))

    }
}

function* uploadCategorySaga() {
    yield takeLatest(GET_CATEGORY_UPLOAD_START, getUploadCategory)
}

export default uploadCategorySaga