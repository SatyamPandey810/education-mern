import { call, put, takeLatest } from "redux-saga/effects";
import getAllBlogService from "../../services/blogs/blogGet-service";
import { getBlogError, getBlogSuccess } from "../../actions/blogs/getBlogs.action";
import { BLOG_GET_START } from "../../constants/blog-constants";
function* getAllBlogs() {
    try {
        const data = yield call(getAllBlogService)
        yield put(getBlogSuccess(data))
    } catch (error) {
        yield put(getBlogError(error.message))
    }
}
function* getAllBlogSaga() {
    yield takeLatest(BLOG_GET_START, getAllBlogs)
}

export default getAllBlogSaga