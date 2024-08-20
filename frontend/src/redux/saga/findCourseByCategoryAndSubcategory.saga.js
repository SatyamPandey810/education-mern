import { call, put, takeLatest } from "redux-saga/effects";
import findCourseCategoryAndSubcategoryServices from "../services/findCourseCategoryAndSubcategory-services";
import { FIND_COURSE_CATEGORY_SUBCATEGORY_ERROR, FIND_COURSE_CATEGORY_SUBCATEGORY_START, FIND_COURSE_CATEGORY_SUBCATEGORY_SUCCESS } from "../constants/courses/findCourseByCategoryAndSubcategory-constants";
import { findCourseCategoryAndSubcategoryError, findCourseCategoryAndSubcategorySuccess } from "../actions/findCourseByCategoryAndSubcategory.action";

function* findCourseByCategoryAndSubcategory(action) {
    const { categoryId, subcategoryId } = action.payload;
    try {
        const response = yield call(findCourseCategoryAndSubcategoryServices, categoryId, subcategoryId)
        
        yield put(findCourseCategoryAndSubcategorySuccess(response.data))
    } catch (error) {
        yield put(findCourseCategoryAndSubcategoryError(error.message))
    }
}

function* findCourseByCategoryAndSubcategorySaga() {
    yield takeLatest(FIND_COURSE_CATEGORY_SUBCATEGORY_START, findCourseByCategoryAndSubcategory)
}
export default findCourseByCategoryAndSubcategorySaga