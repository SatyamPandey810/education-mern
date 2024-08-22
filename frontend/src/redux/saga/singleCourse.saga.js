import { call, put, takeLatest } from "redux-saga/effects";
import findeSingleCourseService from "../services/singleCourseFind-service";
import { singleCourseError, singleCourseSuccess } from "../actions/singleCourse.action";
import { SINGLE_COURSE_START } from "../constants/courses/course-constants";

function* singleCourse(action) {
    try {
        const response = yield call(findeSingleCourseService, action.payload)
        yield put(singleCourseSuccess(response.data))
    } catch (error) {
        yield put(singleCourseError(error.message))
    }
}
function* singleCourseSaga() {
    yield takeLatest(SINGLE_COURSE_START, singleCourse)
}
export default singleCourseSaga