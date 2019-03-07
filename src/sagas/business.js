import { put, call, takeLatest } from 'redux-saga/effects'

import { types, actions } from '../reducers/business';
import apiCall from '../configs/apiCall';

function getBusinessFlightList() {
    return apiCall.get('/business').then(res => res)
}

export function* getBusinessFlight() {
    try{
        const payload = yield call(getBusinessFlightList());
        if(payload){
            yield put(actions.businessLoadSuccess(payload.data));
        }
        console.log(payload);
    }catch(error){
        yield put(actions.businessLoadError(error))
    }
}

export default [
    takeLatest(types.BUSINESS_LOAD_SUCCESS, getBusinessFlight)
]
