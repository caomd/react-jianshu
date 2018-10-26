import { takeEvery,put } from 'redux-saga/effects'
import { INIR_LIST_ITEM } from './actionTypes'
import { getInitToDoList } from "./actionCreators";
import axios from 'axios';
function* getInitListSagas(){
  const res = yield axios.get('/api/list');
  const action = getInitToDoList(res.data);
  yield put(action);
  // axios.get('/api/list').then((res) => {
  //   const action = getInitToDoList(res.data);
  // }).catch((error) => console.log(error));
}
function* sagas() {
  yield takeEvery(INIR_LIST_ITEM, getInitListSagas);
}

export default sagas;