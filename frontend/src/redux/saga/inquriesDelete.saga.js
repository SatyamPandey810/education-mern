const { put, call, takeLatest } = require("redux-saga/effects");
const { default: deleteinquriesService } = require("../services/inquriesDelete-services");
const { deleteInquirySuccess, deleteInquiryError } = require("../actions/addToInquiry.action");
const { INQUIRY_DELETE_START } = require("../constants/inquries/addToInquiry-constants");


function* inquriesDelete(action) {
    try {
        const response = yield call(deleteinquriesService, action.payload)
        yield put(deleteInquirySuccess(response))
    } catch (error) {
        yield put(deleteInquiryError(error.message))
    }
}

function* inquriesDeleteSaga() {
    yield takeLatest(INQUIRY_DELETE_START, inquriesDelete)
}
export default inquriesDeleteSaga