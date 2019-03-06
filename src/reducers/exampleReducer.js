import { fromJS } from "immutable";

const types = {
    LOAD: "LOAD",
    SUCCESS: "SUCCESS",
    ERROR: "ERROR"
};

const actions = {
    loadStart: () => ({type: types.LOAD}),
    loadSuccess: (payload) => ({ type: types.SUCCESS, payload}),
    loadError: (error) => ({ type: types.ERROR, error }),
};

const initialState = fromJS({
    data: [],
    error: null,
    loading: false,
});

const exampleReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOAD:
            return state.set("loading", fromJS(true));
        case types.SUCCESS:
            return state.set("data", fromJS(action.payload));
        case types.ERROR:
            return state.set("error", fromJS(action.error));

        default:
            return state;
    }
};

export default exampleReducer;
