import {DELETE_RESULT, STORE_RESULT} from "./actionsTypes";

export const saveResult = (result) => {
    return {
        type: STORE_RESULT, result: result
    };
};

export const storeResult = (result) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(saveResult(result));
        }, 2000);
    };

};

export const deleteResult = (id) => {
    return {
        type: DELETE_RESULT, resultId: id
    };
};
