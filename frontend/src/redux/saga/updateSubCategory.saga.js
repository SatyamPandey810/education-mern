import { call, put, takeLatest } from "redux-saga/effects";
import { SUBCATEGORY_UPDATE_START } from "../constants/courses/subCategory-constants";
import { subCategoryUpdateError, subCategoryUpdateSuccess } from "../actions/updateSubCategory.action";
import updateSubCategoryService from "../services/subCategoryUpdate-service";
function* updateSubCategories(action) {
    try {
        const data = yield call(updateSubCategoryService, action.payload)
        console.log(data);
        
        yield put(subCategoryUpdateSuccess(data))
    } catch (error) {
        yield put(subCategoryUpdateError(error))
    }
}

function* updateSubCategorySaga() {
    yield takeLatest(SUBCATEGORY_UPDATE_START, updateSubCategories)
}

export default updateSubCategorySaga