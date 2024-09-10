import { call, put, takeLatest } from "redux-saga/effects";
import updateCourseServices from "../services/courseUpdate-service";
import { updateCourseError, updateCourseSuccess } from "../actions/updateCourse.action";
import { UPDATE_COURSE_START } from "../constants/courses/course-constants";

function* updateCourse({payload}) {
    try {
        const response = yield call(updateCourseServices, payload)
        
        if (response.success) {
            yield put(updateCourseSuccess(response.data));
        } else {
            yield put(updateCourseError(response.message));                                                                                                                                 
        }
    } catch (error) {
        yield put(updateCourseError(error))
    }
}

function* updateCourseSaga() {
    yield takeLatest(UPDATE_COURSE_START, updateCourse)
}

export default updateCourseSaga