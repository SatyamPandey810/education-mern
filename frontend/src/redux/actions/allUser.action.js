import { GET_ALL_USER_ERROR, GET_ALL_USER_START, GET_ALL_USER_SUCCESS } from "../constants/user-constants"

export const getAllUserStart = () => ({
    type: GET_ALL_USER_START
})

export const getAllUserSuccess = (allUser) => ({
    type: GET_ALL_USER_SUCCESS,
    payload: allUser
})

export const getAllUserError = (error) => ({
    type: GET_ALL_USER_ERROR,
    payload: error
})