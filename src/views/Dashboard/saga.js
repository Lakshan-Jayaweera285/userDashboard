import { put, call, takeEvery, take} from "redux-saga/effects";
import {
    GET_CARDS,
    GET_CARDS_SUCCESS,

} from "./action";
import {eventChannel} from "redux-saga";
import {firestore} from "../../config/Firebase";

function* callGetAllCardsSagas() {
    const ref= firestore.collection('Devices').orderBy("created","desc");
    const channel = eventChannel((emit)=>ref.onSnapshot(emit));
    const ref1= firestore.collection('UserOneBicycle');
    const channel1 = eventChannel((emit)=>ref1.onSnapshot(emit));
    const ref2= firestore.collection('UserTwoBicycle');
    const channel2 = eventChannel((emit)=>ref2.onSnapshot(emit));
    const ref3= firestore.collection('UserOneHeart');
    const channel3 = eventChannel((emit)=>ref3.onSnapshot(emit));
    const ref4= firestore.collection('UserTwoHeart');
    const channel4 = eventChannel((emit)=>ref4.onSnapshot(emit));
    while(true){
        try {
            const res = yield take(channel);
            const data = res.docs.map(doc=>{
                return doc.data()
            })
            const res1 = yield take(channel1);
            const data1 = res1.docs.map(doc=>{
                return doc.data()
            })
            const res2 = yield take(channel2);
            const data2 = res2.docs.map(doc=>{
                return doc.data()
            })
            const res3 = yield take(channel3);
            const data3 = res3.docs.map(doc=>{
                return doc.data()
            })
            const res4 = yield take(channel4);
            const data4 = res4.docs.map(doc=>{
                return doc.data()
            })
            yield put({type: GET_CARDS_SUCCESS, data:{data , data1 , data2 , data3, data4}});    
        } catch (error) {
            console.log(error);
        }
    }

}
export function* watchGetAllCards() {
    yield takeEvery(GET_CARDS, callGetAllCardsSagas);
}

