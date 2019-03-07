import { put, call, takeLatest } from 'redux-saga/effects'

import { types, actions } from '../reducers/business';
import apiCall from '../configs/apiCall';

function getBusinessFlightList() {
    return apiCall.get('/business').then(res => res)
}

export function* getBusinessFlight() {
    try{
        const payload = yield call(getBusinessFlightList);
        console.log(payload);
        if(payload){
            yield put(actions.businessLoadSuccess(payload.data));
        }
        console.log(payload);
    }catch(error){
        yield put(actions.businessLoadError(error))
    }
}

export function* addNewBusinessFlight({flightData}) {
    try{
        const dummyObject = {
            uuid: "07d7972e-73dc-4ba9-96da-3d56788cf2a0",
            arrival: "2019-03-08T01:51:15.188Z",
            departure: "2019-03-07T23:27:34.219Z",
        }
        const payload = {
            ...flightData,
            dummyObject
        };
        yield put(actions.addNewBusinessFlightSuccess(payload))
    }catch (error) {
        yield put(actions.addNewBusinessFlightError(error))
    }
}

export default [
    takeLatest(types.BUSINESS_LOAD_START, getBusinessFlight),
    takeLatest(types.ADD_NEW_BUSINESS_FLIGHT_START, addNewBusinessFlight),
]
