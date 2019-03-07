import { fromJS } from "immutable";

export const types = {
    BUSINESS_LOAD_START: "BUSINESS_LOAD_START",
    BUSINESS_LOAD_SUCCESS: "BUSINESS_LOAD_SUCCESS",
    BUSINESS_LOAD_ERROR: "BUSINESS_LOAD_ERROR"
};

export const actions = {
    businessLoadStart: () => ({type: types.BUSINESS_LOAD_START}),
    businessLoadSuccess: (payload) => ({ type: types.BUSINESS_LOAD_SUCCESS, payload}),
    businessLoadError: (error) => ({ type: types.BUSINESS_LOAD_ERROR, error }),
};

const initialState = fromJS({
    data: [],
    error: null,
    loading: false,
});

const businessReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.BUSINESS_LOAD_START:
            return state.set("loading", fromJS(true));
        case types.BUSINESS_LOAD_SUCCESS:
            return state.set("data", fromJS(action.payload));
        case types.BUSINESS_LOAD_ERROR:
            return state.set("error", fromJS(action.error));

        default:
            return state;
    }
};

export default businessReducer;
