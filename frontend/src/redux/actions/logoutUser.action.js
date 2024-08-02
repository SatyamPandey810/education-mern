import { LOGOUT_USER_ERROR, LOGOUT_USER_START, LOGOUT_USER_SUCCESS } from "../constants/user-constants";

export const logoutUserStart = () => ({
    type: LOGOUT_USER_START

});

export const logoutUserSuccess = (data) => ({
    type: LOGOUT_USER_SUCCESS,
    payload: data
});

export const logoutUserError = (error) => ({
    type: LOGOUT_USER_ERROR,
    payload: error
})