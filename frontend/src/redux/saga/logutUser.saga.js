import { call, put, takeLatest } from "redux-saga/effects";
import { logoutHandller } from "../services/userLogOut.services";
import { logoutUserError, logoutUserSuccess } from "../actions/logoutUser.action";
import { LOGOUT_USER_START } from "../constants/user-constants";

function* getLogoutSaga() {
    try {
        const data = yield call(logoutHandller)
        yield put(logoutUserSuccess(data))
    } catch (error) {
        yield put(logoutUserError(error.message))
    }
}

function* logoutSaga() {
    yield takeLatest(LOGOUT_USER_START, getLogoutSaga)
}
export default logoutSaga