import { put, call, takeLatest } from 'redux-saga/effects'

import { types, actions } from '../reducers/cheap';
import apiCall from '../configs/apiCall';

function getCheapFlightList(){
    return apiCall.get('/cheap').then(res => res)
}
// ...

export function* getCheapFlight() {
    try{
        const payload = yield call(getCheapFlightList)
        console.log(payload);
        if(payload){
            yield put(actions.cheapLoadSuccess(payload.data));
        }
        console.log(payload);
    }catch(error){
        yield put(actions.cheapLoadError(error))
    }
}

export default [
    takeLatest(types.CHEAP_LOAD_START, getCheapFlight)
]
