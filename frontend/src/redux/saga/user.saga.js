import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchUserDetails } from '../services/logUser-services';
import { getUserError, getUserSuccess } from '../actions/user.action';
import { GET_USER_START } from '../constants/user-constants';

// Worker saga
function* getUserSaga() {
    try {
        const data = yield call(fetchUserDetails);
        yield put(getUserSuccess(data));
    } catch (error) {
        yield put(getUserError(error.message));
    }
}

// Watcher saga
function* userSaga() {
    yield takeLatest(GET_USER_START, getUserSaga);
}

export default userSaga;
