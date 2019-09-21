import {
    all,
    call,
    fork,
    put,
    takeEvery
} from 'redux-saga/effects'
import { GET_PRODUCTS } from '../actions/types'
import { getProductsFromServer } from '../networking/apis'
import { getProductActionSuccess, getProductActionFailure } from '../actions/products'

function* getProducts() {
    try {
        let products = yield call(getProductsFromServer)
        if (products.message) {
            yield put(getProductActionFailure(products))
        } else {
            yield put(getProductActionSuccess(products.data))
        }
    } catch (err) {
        yield put(getProductActionFailure(err))
    }
}

export function* getProductsSaga() {
    yield takeEvery(GET_PRODUCTS, getProducts)
}

export default function* rootSaga() {
    yield all([
        fork(getProductsSaga),
    ])
}







