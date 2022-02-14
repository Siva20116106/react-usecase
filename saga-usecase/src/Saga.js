import {call, put} from "redux-saga/effects";

const delay = (ms) => new Promise(() => setTimeout(console.log("time out completed"), ms));

export function *firstSaga() {
    
    console.log("Hello My First Saga!!!");
    yield call(delay, 5000);
    yield put({type: "INCREMENT"});
    
}