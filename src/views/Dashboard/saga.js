import { put, call, takeEvery, take} from "redux-saga/effects";
import {
    GET_CARDS,
    GET_CARDS_SUCCESS,

} from "./action";
import {eventChannel} from "redux-saga";
import {firestore} from "../../config/Firebase";

function* callGetAllCardsSagas() {
   // const ref= firestore.collection('Devices').orderBy("created","desc");
   // const channel = eventChannel((emit)=>ref.onSnapshot(emit));
    const ref1= firestore.collection('UserOneSpeed');
    const channel1 = eventChannel((emit)=>ref1.onSnapshot(emit));
    const ref2= firestore.collection('UserTwoSpeed');
    const channel2 = eventChannel((emit)=>ref2.onSnapshot(emit));
    const ref3= firestore.collection('UserOneHeart');
    const channel3 = eventChannel((emit)=>ref3.onSnapshot(emit));
    const ref4= firestore.collection('UserTwoHeart');
    const channel4 = eventChannel((emit)=>ref4.onSnapshot(emit));
    const ref5= firestore.collection('UserOneDistance');
    const channel5 = eventChannel((emit)=>ref1.onSnapshot(emit));
    const ref6= firestore.collection('UserTwoDistance');
    const channel6 = eventChannel((emit)=>ref2.onSnapshot(emit));
    const ref7= firestore.collection('UserOneOxygen');
    const channel7 = eventChannel((emit)=>ref3.onSnapshot(emit));
    const ref8= firestore.collection('UserTwoOxygen');
    const channel8 = eventChannel((emit)=>ref4.onSnapshot(emit));

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
            const res3 = yield take(channel3);
            const data3 = res3.docs.map(doc=>{
                return doc.data()
            })
            const res4 = yield take(channel4);
            const data4 = res4.docs.map(doc=>{
                return doc.data()
            })
            const res5 = yield take(channel5);
            const data5 = res5.docs.map(doc=>{
                return doc.data()
            })
            const res6 = yield take(channel6);
            const data6 = res6.docs.map(doc=>{
                return doc.data()
            })
            const res7 = yield take(channel7);
            const data7 = res7.docs.map(doc=>{
                return doc.data()
            })
            const res8 = yield take(channel8);
            const data8 = res8.docs.map(doc=>{
                return doc.data()
            })
            yield put({type: GET_CARDS_SUCCESS, data:{data1 , data2 , data3, data4 , data5 , data6 , data7, data8}});    
        } catch (error) {
            console.log(error);
        }
    }

}
export function* watchGetAllCards() {
    yield takeEvery(GET_CARDS, callGetAllCardsSagas);
}

