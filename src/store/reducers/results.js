import * as actionTypes from '../actions/actionsTypes';
import updateObject from "../utility";

const initialState = {
    results: []
};

const deleteResult = (state, action) => {
    const updatedArray = state.results.filter(element => element.id !== action.resultId);
    return updateObject(state,{results: updatedArray});
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return updateObject(state,{results: state.results.concat({value: action.result, id: new Date()})});
        case actionTypes.DELETE_RESULT:
            return deleteResult(state, action);
        default:
            return state;
    }
};

export default reducer;
