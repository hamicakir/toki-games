import { fromJS } from "immutable";
import { createSelector } from 'reselect'

export const types = {
    CHEAP_LOAD_START: "CHEAP_LOAD_START",
    CHEAP_LOAD_SUCCESS: "CHEAP_LOAD_SUCCESS",
    CHEAP_LOAD_ERROR: "CHEAP_LOAD_ERROR"
};

export const actions = {
    cheapLoadStart: () => ({type: types.CHEAP_LOAD_START}),
    cheapLoadSuccess: (payload) => ({ type: types.CHEAP_LOAD_SUCCESS, payload}),
    cheapLoadError: (error) => ({ type: types.CHEAP_LOAD_ERROR, error }),
};

const initialState = fromJS({
    data: [],
    error: null,
    loading: false,
});

const cheapReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CHEAP_LOAD_START:
            return state
                .set("loading", fromJS(true));
        case types.CHEAP_LOAD_SUCCESS:
            return state
                .set("data", fromJS(action.payload))
                .set("loading", false);
        case types.CHEAP_LOAD_ERROR:
            return state
                .set("error", fromJS(action.error))
                .set("loading", false);

        default:
            return state;
    }
};

export const cheapFlightState = state => state.cheapFlight;

export const makeSelectCheapFlight = () => createSelector(cheapFlightState, substate => substate.toJS());

export default cheapReducer;
