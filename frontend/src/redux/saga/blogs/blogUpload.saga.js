import blogUploadHandller from "../../services/blogs/blogUpload-sercices";

const { call, put, takeLatest } = require("redux-saga/effects");
// const { blogUploadHandller } =require ("../../services/blogs/blogUpload-sercices");
const { BLOG_UPLOAD_START } = require("../../constants/blog-constants");
const { blogUploadError, blogUploadSuccess } = require("../../actions/blogs/blogUpload.action");

function* uploadBlog(action) {
    try {
        const data = yield call(blogUploadHandller, action.payload)

        yield put(blogUploadSuccess(data))
    } catch (error) {
        yield put(blogUploadError(error.message))
    }
}
function* blogUploadSaga() {
    yield takeLatest(BLOG_UPLOAD_START, uploadBlog)
}
export default blogUploadSaga