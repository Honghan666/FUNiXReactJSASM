import * as actionType from "./actionType";

export const StaffsSalary = (
    state = {
        isLoading: true,
        errMess: null,
        staffsSalary: []
    },
    action
) => {
    switch (action.type) {
        case actionType.ADD_STAFFSSALARY:
            return {
                ...state,
                isLoading: false,
                staffsSalary: action.payload
            };

        case actionType.STAFFSSALARY_LOADING:
            return {
                ...state,
                isLoading: true,
                errMess: null,
                staffsSalary: []
            };

        case actionType.STAFFSSALARY_FAILED:
            return {
                ...state,
                isLoading: false,
                errMess: action.payload
            };
        
        default:
            return state;
    }
};