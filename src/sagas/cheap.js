import { put, call, takeLatest } from 'redux-saga/effects'

import { types, actions } from '../reducers/cheap';
import apiCall from '../configs/apiCall';

function getCheapFlightList(){
    return apiCall.get('/cheap').then(res => res)
}
// ...

// Our worker Saga: will perform the async increment task
export function* getCheapFlight() {
    try{
        const payload = yield call(getCheapFlightList())
        console.log(payload);
        if(payload){
            yield put(actions.cheapLoadSuccess(payload));
        }
        console.log(payload);
    }catch(error){
        yield put(actions.cheapLoadError(error))
    }
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export default [
    takeLatest(types.CHEAP_LOAD_START, getCheapFlight)
]
