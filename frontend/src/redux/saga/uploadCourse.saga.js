const { call, put, takeLatest } = require("redux-saga/effects");
const { default: uploadCourseHandller } = require("../services/courseUpload-service");
const { courseUploadSuccess, courseUploadError } = require("../actions/uploadCourse.action");
const { COURSE_UPLOAD_START } = require("../constants/courses/course-constants");

function* courseUpload(action) {
    try {
        const data = yield call(uploadCourseHandller, action.payload)
        yield put(courseUploadSuccess(data))


    } catch (error) {
        yield put(courseUploadError(error.message))
    }
}


function* courseUploadSaga() {
    yield takeLatest(COURSE_UPLOAD_START, courseUpload)
}
export default courseUploadSaga