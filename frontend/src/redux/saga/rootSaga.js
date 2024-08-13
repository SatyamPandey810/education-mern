import { all, fork } from "redux-saga/effects"
import userSaga from "./user.saga"
import allUserSaga from "./getAllUser.saga"
import logoutSaga from "./logutUser.saga"
import uploadCategorySaga from "./uploadCategory.saga"
import getAllCategorySaga from "./getAllCategory.saga"
import updateCategorySaga from "./updateCategory.saga"
import uploadSubCategorySaga from "./uploadSubCategory.saga"


export function* root() {
    yield all([
        fork(userSaga),
        fork(allUserSaga),
        fork(logoutSaga),
        fork(uploadCategorySaga),
        fork(getAllCategorySaga),
        fork(updateCategorySaga),
        fork(uploadSubCategorySaga)
    ])
}