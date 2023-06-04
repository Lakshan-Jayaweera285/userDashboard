import { put, call, takeEvery, take } from 'redux-saga/effects';
import { GET_LIMITS, GET_LIMITS_SUCCESS, ADD_LIMITS, ADD_LIMITS_SUCCESS, ADD_NOTIFICATIONS } from './action';
import { eventChannel } from 'redux-saga';
import { firestore } from '../../config/Firebase';

function* callGetAllCardsSagas() {
  const ref = firestore.collection('Devices').orderBy('created', 'desc');
  const channel = eventChannel((emit) => ref.onSnapshot(emit));
  while (true) {
    try {
      const res = yield take(channel);
      const data = res.docs.map((doc) => {
        return doc.data();
      });
      yield put({ type: GET_LIMITS_SUCCESS, data: data });
    } catch (error) {
      console.log(error);
    }
  }
}
export function* watchGetAllLimits() {
  yield takeEvery(GET_LIMITS, callGetAllCardsSagas);
}

//sending data to firebase
async function addNewCardAsync(data) {
  await firestore
    .collection('Devices')
    .doc('gaAQG3CfCWvayza2t2W9')
    .update({ ...data })
    .then(() => {
      console.log('Document successfully updated!');
    })
    .catch(function (error) {
      console.error('Error adding document: ', error);
    });
}

function* callAddNewCardSagas(action) {
  try {
    yield call(addNewCardAsync, action.data);
    yield put({ type: ADD_LIMITS_SUCCESS });
  } catch (error) {
    console.log(error);
  }
}

export function* watchAddNewLimits() {
  yield takeEvery(ADD_LIMITS, callAddNewCardSagas);
}

function* addNotifications(data) {
  yield put({type: ADD_NOTIFICATIONS, data: data})
}

export function* watchAddNotifications() {
  yield takeEvery(ADD_NOTIFICATIONS, addNotifications);
}