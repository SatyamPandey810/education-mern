import { call, put, takeLatest } from "redux-saga/effects";
import updateCategoryServices from "../services/categoryUpdate-services";
import { updateCategoryError, updateCategorySuccess } from "../actions/updateCategory.action";
import { UPDATE_CATEGORY_START } from "../constants/courses/category-constants";

function* updateCategory(action) {
    try {
        console.log("Saga received action:", action);
        const response  = yield call(updateCategoryServices, action.payload)
        console.log("Saga received response:", response );
        // yield put(updateCategorySuccess(data))
        if (response && response.success) {
            const categoryData = response.data !== null ? response.data : {}; // Handle null by substituting with an empty object
            yield put(updateCategorySuccess(categoryData));
        } else {
            yield put(updateCategoryError(response?.message || "Failed to update category"));
        }
    } catch (error) {
        yield put(updateCategoryError(error))
    }
}

function* updateCategorySaga() {
    yield takeLatest(UPDATE_CATEGORY_START, updateCategory)

}
export default updateCategorySaga