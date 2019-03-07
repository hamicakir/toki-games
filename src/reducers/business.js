import { fromJS } from "immutable";
import { createSelector } from 'reselect';

export const types = {
    BUSINESS_LOAD_START: "BUSINESS_LOAD_START",
    BUSINESS_LOAD_SUCCESS: "BUSINESS_LOAD_SUCCESS",
    BUSINESS_LOAD_ERROR: "BUSINESS_LOAD_ERROR",

    ADD_NEW_BUSINESS_FLIGHT_START: "ADD_NEW_BUSINESS_FLIGHT_START",
    ADD_NEW_BUSINESS_FLIGHT_SUCCESS: "ADD_NEW_BUSINESS_FLIGHT_SUCCESS",
    ADD_NEW_BUSINESS_FLIGHT_ERROR: "ADD_NEW_BUSINESS_FLIGHT_ERROR",
};

export const actions = {
    businessLoadStart: () => ({type: types.BUSINESS_LOAD_START}),
    businessLoadSuccess: (payload) => ({ type: types.BUSINESS_LOAD_SUCCESS, payload}),
    businessLoadError: (error) => ({ type: types.BUSINESS_LOAD_ERROR, error }),

    addNewBusinessFlightStart: (flightData) => ({type: types.ADD_NEW_BUSINESS_FLIGHT_START, flightData}),
    addNewBusinessFlightSuccess: (payload) => ({ type: types.ADD_NEW_BUSINESS_FLIGHT_SUCCESS, payload}),
    addNewBusinessFlightError: (error) => ({ type: types.ADD_NEW_BUSINESS_FLIGHT_ERROR, error }),
};

const initialState = fromJS({
    data: [],
    error: null,
    loading: false,
});

const businessReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.BUSINESS_LOAD_START:
            return state
                .set("loading", fromJS(true));
        case types.BUSINESS_LOAD_SUCCESS:
            return state
                .set("data", fromJS(action.payload))
                .set("loading", false);
        case types.BUSINESS_LOAD_ERROR:
            return state
                .set("error", fromJS(action.error))
                .set("loading", false);
        case types.ADD_NEW_BUSINESS_FLIGHT_SUCCESS:
            return state
                .set("data", fromJS([...state.data, action.payload]));
        case types.ADD_NEW_BUSINESS_FLIGHT_ERROR:
            return state
                .set("error", fromJS(action.error));
        default:
            return state;
    }
};

export const businessFlightState = state => state.businessFlight;

export const makeSelectBusinessFlight = () => createSelector(businessFlightState, substate => substate.toJS());

export default businessReducer;
