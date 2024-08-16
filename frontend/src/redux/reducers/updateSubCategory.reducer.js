const { SUBCATEGORY_UPDATE_START, SUBCATEGORY_UPDATE_SUCCESS } = require("../constants/courses/subCategory-constants");

const initialState = {
    subCategory: [],
    updatedSubCategory: null
}
const updateSubCategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUBCATEGORY_UPDATE_START:
            return {
                ...state,
                updatedSubCategory: null
            }
        case SUBCATEGORY_UPDATE_SUCCESS:
            return {
                ...state,
                updatedSubCategory: action.payload,
                subCategory: state.subCategory.map(subCat =>
                    subCat._id === action.payload._id ? action.payload : subCat
                ),
            }
        default:
            return state
    }
}
export default updateSubCategoryReducer;