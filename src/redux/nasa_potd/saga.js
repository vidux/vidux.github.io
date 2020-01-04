import { all, takeEvery, fork,call ,put} from 'redux-saga/effects';
import actions from './actions';
import axios from 'axios';

export function* getNasaAstroidJson() {
  yield takeEvery(actions.GET_NASA_DATA_FETCH_START, function*(payload) {
    const Result = yield call(async ()=>
      await axios.get(`https://api.nasa.gov/planetary/apod?api_key=MD3XFhW0pb8OnFVDGPZs0uMHtsOTGO542q3oJyio`)
      .then(res => res.data)
    );
    
    if (Result.date && Result.hdurl) {
      
      yield put({ type: actions.GET_NASA_DATA_FETCH_DONE, payload:Result})
    } else {
      yield put({ type: actions.GET_NASA_DATA_FETCH_ERROR })
    }

  });
}





export default function* rootSaga() {
  yield all([fork(getNasaAstroidJson)]);
}
