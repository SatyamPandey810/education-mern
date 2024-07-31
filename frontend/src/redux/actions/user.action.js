import { GET_USER_ERROR, GET_USER_START, GET_USER_SUCCESS } from "../constants/user-constants"

export const getUserStart = () => ({
    type: GET_USER_START
})
export const getUserSuccess = (user) => ({
    type: GET_USER_SUCCESS,
    payload:user
})
export const getUserError = (error) => ({
    type: GET_USER_ERROR,
    payload:error                
})
