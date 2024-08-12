import { call, put, takeLatest } from "redux-saga/effects";
import updateCategoryServices from "../services/categoryUpdate-services";
import { updateCategoryError, updateCategorySuccess } from "../actions/updateCategory.action";
import { UPDATE_CATEGORY_START } from "../constants/courses/category-constants";

function* updateCategory(action) {
    try {
        const data = yield call(updateCategoryServices, action.payload)
        console.log(data);
        
        yield put(updateCategorySuccess(data))
    } catch (error) {
        yield put(updateCategoryError(error))
    }
}

function* updateCategorySaga() {
    yield takeLatest(UPDATE_CATEGORY_START, updateCategory)

}
export default updateCategorySaga