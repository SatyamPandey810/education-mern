const { COURSE_UPLOAD_START, COURSE_UPLOAD_SUCCESS, COURSE_UPLOAD_ERROR } = require("../constants/courses/course-constants");

const inititalState = {
    course: null
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
                course: [
                    ...state.course,
                    action.payload
                ]
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