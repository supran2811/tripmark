import { all } from 'redux-saga/effects';

import { saga as authSaga } from '../auth/store';

export default function* saga() {
  yield all([authSaga()]);
}