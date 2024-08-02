import { all, fork } from "redux-saga/effects"
import userSaga from "./user.saga"
import allUserSaga from "./getAllUser.saga"
import logoutSaga from "./logutUser.saga"


export function* root() {
    yield all([
        fork(userSaga),
        fork(allUserSaga),
        fork(logoutSaga),
    ])
}