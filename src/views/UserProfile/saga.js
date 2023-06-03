import { put, call, takeEvery, take } from 'redux-saga/effects';
import { GET_USER, GET_USER_SUCCESS, ADD_USER, ADD_USER_SUCCESS } from './action';
import { eventChannel } from 'redux-saga';
import { firestore, addDoc } from '../../config/Firebase';

function* callGetAllCardsSagas() {
  const ref = firestore.collection('Users');
  const channel = eventChannel((emit) => ref.onSnapshot(emit));
  while (true) {
    try {
      const res = yield take(channel);
      const data = res.docs.map((doc) => {
        return doc.data();
      });
      yield put({ type: GET_USER_SUCCESS, data: data });
    } catch (error) {
      console.log(error);
    }
  }
}
export function* watchGetUser() {
  yield takeEvery(GET_USER, callGetAllCardsSagas);
}

//sending data to firebase
async function addNewCardAsync(data) {
  await firestore
    .collection('Users').add({ ...data})
    .then(() => {
      console.log('Document successfully updated!');
    })
    .catch(function (error) {
      console.error('Error adding document: ', error);
    });

  return id;
}

function* callAddNewCardSagas(action) {
  try {
    yield call(addNewCardAsync, action.data);
    yield put({ type: ADD_USER_SUCCESS });
  } catch (error) {
    console.log(error);
  }
}

export function* watchAddNewUser() {
  yield takeEvery(ADD_USER, callAddNewCardSagas);
}
