import { call, put, takeLatest } from "redux-saga/effects";
import getBlogCategoryAndSubCategoryServices from "../../services/blogs/getBlogCategoryAndSubCategory-services";
import { findBlogCategoryAndSubcategoryError, findBlogCategoryAndSubcategorySuccess } from "../../actions/blogs/blogGetCategoryAndSubcategory.action";
import { BLOG_GET_CATEGORY_AND_SUBCATEGORY_START } from "../../constants/blog-constants";

function* getBlogsCategory(action) {
    const { categoryId, subcategoryId } = action.payload;
    try {
        const data = yield call(getBlogCategoryAndSubCategoryServices, action.payload.categoryId, action.payload.subcategoryId)
        yield put(findBlogCategoryAndSubcategorySuccess(data))
    } catch (error) {
        yield put(findBlogCategoryAndSubcategoryError(error.message))
    }
}
function* getBlogsCategoryAndSubCategorySaga() {
    yield takeLatest(BLOG_GET_CATEGORY_AND_SUBCATEGORY_START, getBlogsCategory)
}
export default getBlogsCategoryAndSubCategorySaga