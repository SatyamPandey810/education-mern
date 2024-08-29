import { call, put, takeLatest } from "redux-saga/effects";
import sinleBlogFindService from "../../services/blogs/singleBlogsFind-services";
import { singleBlogError, singleBlogSuccess } from "../../actions/blogs/singleBlog.action";
import { SINGLE_BLOG_START } from "../../constants/blog-constants";

function* singleBlog(action) {
    try {
        const response = yield call(sinleBlogFindService, action.payload)

        yield put(singleBlogSuccess(response.data))
    } catch (error) {
        yield put(singleBlogError(error.message))
    }
}
function* singleBlogSaga() {
    yield takeLatest(SINGLE_BLOG_START, singleBlog)
}
export default singleBlogSaga