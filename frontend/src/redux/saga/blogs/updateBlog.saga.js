const { call, put, takeLatest } = require("redux-saga/effects");
const { default: updateBlogHandller } = require("../../services/blogs/blogUpdate-service");
const { updateBlogSuccess, updateBlogError } = require("../../actions/blogs/updateBlogs.action");
const { BLOG_UPDATE_START } = require("../../constants/blog-constants");

function* updateBlog(action) {
    try {
        const response = yield call(updateBlogHandller, action.payload)
        console.log(response.data);
        
        yield put(updateBlogSuccess(response.data))
    } catch (error) {
        yield put(updateBlogError(error.message))
    }
}
function* updateBlogSaga() {
    yield takeLatest(BLOG_UPDATE_START, updateBlog)
}
export default updateBlogSaga