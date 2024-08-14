import { GET_COURSE_ERROR, GET_COURSE_START, GET_COURSE_SUCCESS } from "../constants/courses/course-constants";

const initialState = {
    allCourse: null
}

const getAllCourseReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COURSE_START:
            return {
                ...state
            }

        case GET_COURSE_SUCCESS:
            return {
                ...state,
                allCourse: action.payload
            }
        case GET_COURSE_ERROR:
            return {
                ...state,
                error: action.payload
            }

        default:
            return state
    }

}
export default getAllCourseReducer