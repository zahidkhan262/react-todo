import { takeEvery, put } from 'redux-saga/effects'
import { PRODUCT_API_URL } from '../../constant';
import { ADD_PRODUCT, SET_ADD_PRODUCT } from '../constant';

function* getProducts() {
    let response = yield fetch(PRODUCT_API_URL)
    response = yield response.json()
    yield put({ type: SET_ADD_PRODUCT, data: response })
    // console.log(response, "api")
}
function* productSaga() {
    yield takeEvery(ADD_PRODUCT, getProducts)
}

export default productSaga;