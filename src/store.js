import {fork} from "redux-saga/effects";
import { watchGetAllCards} from "./views/Dashboard/saga";
import {  watchAddNewUser,watchGetUser } from "./views/UserProfile/saga"
import { watchGetAllDevices } from "./views/TableList/sasga";
import {watchGetAllLimits, watchAddNewLimits} from "./views/Notifications/saga";

export default function* rootSaga() {
    yield fork(watchGetAllCards);
    yield fork( watchAddNewUser);
    yield fork(watchGetUser);
    yield fork(watchGetAllDevices);
    yield fork(watchAddNewLimits);
    yield fork(watchGetAllLimits);
};

