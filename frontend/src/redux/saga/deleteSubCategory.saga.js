const { put, call, takeLatest } = require("redux-saga/effects");
const { default: deleteSubCategoryServices } = require("../services/subCategorydelete-services");
const { deleteSubCategorySuccess, deleteSubCategoryError } = require("../actions/deleteSubCategory.action");
const { SUBCATEGORY_DELETE_START } = require("../constants/courses/subCategory-constants");

function* deleteSubCategory(action) {
    try {
        const response = yield call(deleteSubCategoryServices, action.payload)
        yield put(deleteSubCategorySuccess(response))

    } catch (error) {
        yield put(deleteSubCategoryError(error.message))
    }
}

function* deleteSubCategorySaga() {
    yield takeLatest(SUBCATEGORY_DELETE_START, deleteSubCategory)
}
export default deleteSubCategorySaga