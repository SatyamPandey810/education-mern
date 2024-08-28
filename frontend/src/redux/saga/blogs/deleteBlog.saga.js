const { put, call, takeLatest } = require("redux-saga/effects");
const { default: deleteBlogService } = require("../../services/blogs/deleteBlog-service");
const { deleteBlogSuccess, deleteBlogError } = require("../../actions/blogs/deleteBlog.action");
const { BLOG_DELETE_START } = require("../../constants/blog-constants");


function* blogDelete(action) {
    try {
        const responseData = yield call(deleteBlogService, action.payload)
        
        yield put(deleteBlogSuccess(responseData))
    } catch (error) {
        yield put(deleteBlogError(error.message))
    }
}

function* blogDeleteSaga() {
    yield takeLatest(BLOG_DELETE_START, blogDelete)
}
export default blogDeleteSaga