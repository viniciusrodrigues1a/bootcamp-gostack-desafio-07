import { Alert } from 'react-native';
import { call, fork, select, put, takeLatest, all } from 'redux-saga/effects';

import { addToCartSuccess, updateAmountSuccess } from './actions';

import api from '../../../services/api';
import formatPrice from '../../../utils/formatPrice';

function outOfStockAlert() {
  Alert.alert('Aviso', 'Quantidade solicitada fora de estoque');
}

function* addToCart(action) {
  const { id } = action;
  const product = yield select(state => state.cart.find(p => p.id === id));

  const stockResponse = yield call(api.get, `/stock/${id}`);
  const stockAmount = stockResponse.data.amount;
  const currentAmount = product ? product.amount : 1;
  const newAmount = currentAmount + 1;

  if (newAmount > stockAmount) {
    outOfStockAlert();
    return;
  }

  if (product) {
    yield put(updateAmountSuccess(id, product.amount + 1));
  } else {
    const productResponse = yield call(api.get, `/products/${id}`);

    yield put(
      addToCartSuccess({
        ...productResponse.data,
        amount: 1,
        priceFormatted: formatPrice(productResponse.data.price),
      })
    );
  }
}

function* updateAmount(action) {
  const { id, amount } = action;

  if (amount <= 0) return;

  const stockResponse = yield call(api.get, `/stock/${id}`);
  const stockAmount = stockResponse.data.amount;

  if (amount > stockAmount) {
    outOfStockAlert();
    return;
  }

  yield put(updateAmountSuccess(id, amount));
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
