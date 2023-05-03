import { put, call, takeEvery, take} from "redux-saga/effects";
import {
    GET_CARDS,
    GET_CARDS_SUCCESS,

} from "./action";
import {eventChannel} from "redux-saga";
import {firestore} from "../../config/Firebase";

function* callGetAllCardsSagas() {
    const ref1= firestore.collection('Devices').orderBy("created","desc");
    const channel1 = eventChannel((emit)=>ref1.onSnapshot(emit));
    const ref2= firestore.collection('UserOneBicycle');
    const channel2 = eventChannel((emit)=>ref2.onSnapshot(emit));
    while(true){
        try {
            const res1 = yield take(channel1);
            const data1 = res1.docs.map(doc=>{
                return doc.data()
            })
            const res2 = yield take(channel2);
            const data2 = res2.docs.map(doc=>{
                return doc.data()
            })
            yield put({type: GET_CARDS_SUCCESS, data:{data1 , data2 }});    
        } catch (error) {
            console.log(error);
        }
    }

}
export function* watchGetAllCards() {
    yield takeEvery(GET_CARDS, callGetAllCardsSagas);
}

