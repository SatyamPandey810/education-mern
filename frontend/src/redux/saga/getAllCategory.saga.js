import { call, put, takeLatest } from "redux-saga/effects";
import getAllCategoryService from "../services/categoryGet-service";
import { getAllCategoryError, getAllCategorySuccess } from "../actions/getCategory.action";
import { GET_ALL_CATEGORY_START } from "../constants/courses/category-constants";

function* getAllCategory() {
    try {
        const data = yield call(getAllCategoryService)

        yield put(getAllCategorySuccess(data))
    } catch (error) {
        yield put(getAllCategoryError(error.message))
    }
}
function* getAllCategorySaga() {
    yield takeLatest(GET_ALL_CATEGORY_START, getAllCategory)
}
export default getAllCategorySaga