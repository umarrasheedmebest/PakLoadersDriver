import {call,put} from 'redux-saga/effects';
import { bidCreateResponse, getAllBidsResponse } from '../slices/BidsSlice';
import { requestGetBids,requestBidsCreate } from '../slices/RequestAPI/BidsApi';

// Singup funtion
export function* getAllBidsRequestSaga(action){
     console.log("I'm bids Saga")
try {
    const response=yield call(requestGetBids);
    const mainvalue=response.data;
   console.log(mainvalue);
    yield put(getAllBidsResponse(mainvalue));
} catch (error) {
    console.log("Not call api request "+error)
}

};
// Bids Create
export function* bidCreateRequestSaga(action){
    console.log("I'm Bids Create Saga")
    const data=action.payload
try {
   const response=yield call(requestBidsCreate,data);
   const mainvalue=response.data;
  console.log(mainvalue);
   yield put(bidCreateResponse(mainvalue));
} catch (error) {
   console.log("Not call api request "+error)
}

};

