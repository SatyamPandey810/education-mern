import { call, put, takeLatest } from 'redux-saga/effects';
import { GET_USER_START, getUserError, getUserSuccess } from '../reducers/user.reducer';
import summaryApi from '../../common';

// Fetch user details function
// const fetchUserDetails = async () => {
//     const response = await fetch(summaryApi.userDetails.url, {
//         method: summaryApi.userDetails.method,
//         credentials: 'include'
//     });

//     if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const data = await response.json();
//     return data;
// };
export const fetchUserDetails = async () => {
    try {
        const response = await fetch(summaryApi.userDetails.url, {
            method: summaryApi.userDetails.method,
            credentials: "include"
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const { data, error, success, message } = await response.json();

        // Check for errors or null data
        if (error || !success || !data) {
            throw new Error(message || "Failed to fetch user details");
        }

        return data;
    } catch (error) {
        console.error('Error fetching user details:', error);
        throw error;
    }
}
// Worker saga
function* getUserSaga() {
    try {
        const data = yield call(fetchUserDetails);
        console.log(data);
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
