import { call, put, takeLatest } from "redux-saga/effects";
import { blogUploadHandller } from "../../services/blogs/blogUpload-sercices";
import { BLOG_UPLOAD_START } from "../../constants/blog-constants";
import { blogUploadError, blogUploadSuccess } from "../../actions/blogs/blogUpload.action";

function* uploadBlog(action) {
    try {
        const data = yield call(blogUploadHandller, action.payload)
        yield put(blogUploadSuccess, data)
    } catch (error) {
        yield put(blogUploadError(error.message))
    }
}
export function* blogUploadSaga() {
    yield takeLatest(BLOG_UPLOAD_START, uploadBlog)
}