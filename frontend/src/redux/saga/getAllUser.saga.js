import { call, put, takeLatest } from "redux-saga/effects";
import { fetchAllUser } from "../services/allUser-services";
import { getAllUserError, getAllUserSuccess } from "../actions/allUser.action";
import { GET_ALL_USER_START } from "../constants/user-constants";

function* getAllUserSaga() {
    try {
        const data = yield call(fetchAllUser)
        yield put(getAllUserSuccess(data))

    } catch (error) {
        yield put(getAllUserError(error.message))
    }
}

function* allUserSaga() {
    yield takeLatest(GET_ALL_USER_START, getAllUserSaga)
}
export default allUserSaga