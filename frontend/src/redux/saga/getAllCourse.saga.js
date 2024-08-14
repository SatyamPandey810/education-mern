import { call, put, takeLatest } from "redux-saga/effects";
import getCourseServices from "../services/courseGet-services";
import { getAllCourseError, getAllCourseSuccess } from "../actions/getCourses.action";
import { GET_COURSE_START } from "../constants/courses/course-constants";

function* allCourse() {
    try {
        const data = yield call(getCourseServices)
        
        yield put(getAllCourseSuccess(data))
    } catch (error) {
        yield put(getAllCourseError(error.message))
    }
}

function* getAllCourseSaga() {
    yield takeLatest(GET_COURSE_START, allCourse)
}

export default getAllCourseSaga;