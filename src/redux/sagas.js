import { all } from 'redux-saga/effects';
import nasa_potd from './nasa_potd/saga';


export default function* rootSaga(getState) {
  yield all([
    nasa_potd(),
  
  ]);
}
