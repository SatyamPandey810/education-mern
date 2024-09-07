const { put, call, takeLatest } = require("redux-saga/effects");
const { default: deleteCourseService } = require("../services/courseDelete-services");
const { deleteCourseSuccess, deleteCourseError } = require("../actions/deleteCourse.action");
const { DELETE_COURSE_START } = require("../constants/courses/course-constants");

function* courseDelete(action) {
    try {
        const response = yield call(deleteCourseService, action.payload)
        const courseId = response.data._id;
        yield put(deleteCourseSuccess(courseId))
    } catch (error) {
        yield put(deleteCourseError(error.message))
    }
}
function* courseDeleteSaga() {
    yield takeLatest(DELETE_COURSE_START, courseDelete)
}

export default courseDeleteSaga