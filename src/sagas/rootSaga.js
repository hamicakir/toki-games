import { all } from 'redux-saga/effects';

import cheapFlightSaga from './cheap';
import businessFlight from './business';

export default function* rootSaga() {
    yield all([
        ...cheapFlightSaga,
        ...businessFlight
    ])
}
