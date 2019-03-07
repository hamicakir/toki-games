import { combineReducers } from 'redux';

import businessFlightReducer from './business'
import cheapFlightReducer from './cheap'

const rootReducer = combineReducers({
    businessFlight: businessFlightReducer,
    cheapFlight: cheapFlightReducer,
});

export default rootReducer;
