import { all } from 'redux-saga/effects';

import { saga as authSaga } from '../auth/store';
import { saga as placeSaga} from '../place/store';


export default function* saga() {
  yield all([authSaga() , placeSaga()]);
}