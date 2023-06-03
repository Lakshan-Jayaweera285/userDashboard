import { put, call, takeEvery, take } from 'redux-saga/effects';
import { GET_DEVICES, GET_DEVICES_SUCCESS, ADD_USER_TO_1, ADD_USER_TO_2 } from './action';
import { eventChannel } from 'redux-saga';
import { firestore } from '../../config/Firebase';

function* callGetAllCardsSagas() {
  const ref = firestore.collection('Users').orderBy('userName', 'desc');
  const channel = eventChannel((emit) => ref.onSnapshot(emit));
  while (true) {
    try {
      const res = yield take(channel);
      const data = res.docs.map((doc) => {
        return doc.data();
      });
      yield put({ type: GET_DEVICES_SUCCESS, data: data });
    } catch (error) {
      console.log(error);
    }
  }
}
export function* watchGetAllDevices() {
  yield takeEvery(GET_DEVICES, callGetAllCardsSagas);
}

function* addUserToCycle(user, cycle) {
  if (cycle === '1') {
    yield put({type: ADD_USER_TO_1, data: user})
  }
  if (cycle === '1') {
    yield put({type: ADD_USER_TO_2, data: user})
  }
}

export function* watchAddUserToCycle() {
  yield takeEvery([ADD_USER_TO_1, ADD_USER_TO_2], addUserToCycle);
}