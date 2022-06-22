import * as actionType from "./actionType";

export const Salary = (
    state = {
        isLoading: true,
        errMess: null,
        salary: []
    },
    action
) => {
    switch (action.type) {
        case actionType.ADD_STAFFSSALARY:
            return {
                ...state,
                isLoading: false,
                errMess: null,
                salary: action.payload
            };

        case actionType.STAFFSSALARY_LOADING:
            return {
                ...state,
                isLoading: true,
                errMess: null,
                salary: []
            };

        case actionType.STAFFSSALARY_FAILED:
            return {
                ...state,
                isLoading: false,
                errMess: action.payload,
                salary: []
            };
        
        default:
            return state;
    }
};