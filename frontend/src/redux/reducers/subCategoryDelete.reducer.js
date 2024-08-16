const { SUBCATEGORY_DELETE_START, SUBCATEGORY_DELETE_SUCCESS, SUBCATEGORY_DELETE_ERROR } = require("../constants/courses/subCategory-constants");

const initialState = {
    subCategories: []
}

const deleteSubCategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUBCATEGORY_DELETE_START:
            return {
                ...state
            }
        case SUBCATEGORY_DELETE_SUCCESS:
            return {
                ...state,
                subCategories: state.subCategories.filter(
                    (category) => category._id !== action.payload
                ),
            }
        case SUBCATEGORY_DELETE_ERROR:
            return{
                ...state,
                error:action.payload
            }

        default:
           return state
    }
}

export default deleteSubCategoryReducer