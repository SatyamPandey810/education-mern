const { COURSE_UPLOAD_START, COURSE_UPLOAD_SUCCESS, COURSE_UPLOAD_ERROR } = require("../constants/courses/course-constants");

const inititalState = {
    courseData: null
}

const courseUploadReducer = (state = inititalState, action) => {
    switch (action.type) {
        case COURSE_UPLOAD_START:
            return {
                ...state
            }
        case COURSE_UPLOAD_SUCCESS:
            return {
                ...state,
                courseData: action.payload
            }
        case COURSE_UPLOAD_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }

}
export default courseUploadReducer