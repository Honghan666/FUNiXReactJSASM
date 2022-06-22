import * as actionType from "./actionType";

export const Departments = (
    state = {
        isLoading: true,
        errMess: null,
        departments: []
    },
    action
) => {
    switch (action.type) {
        case actionType.ADD_DEPARTMENT:
            return {
                ...state,
                isLoading: false,
                errMess: null,
                departments: action.payload
            };

        case actionType.DELETE_STAFF_LOADING:
            return {
                ...state,
                isLoading: true,
                errMess: null,
                departments: []
            };

        case actionType.DEPARTMENTS_FAILED:
            return {
                ...state,
                isLoading: false,
                errMess: action.payload,
                departments: []
            };
        
        default:
            return state;
    }
};