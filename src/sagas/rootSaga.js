import { all } from 'redux-saga/effects';

import cheapFlightSaga from './cheap';
import businessFlightSaga from './business';

export default function* rootSaga() {
    yield all([
        ...cheapFlightSaga,
        ...businessFlightSaga
    ])
}
