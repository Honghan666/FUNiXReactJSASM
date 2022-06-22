import * as actionType from "./actionType";

export const Staffs = (
    state = {
        isLoading: false,
        errMess: null,
        staffs: []
    },
    action 
) => {
    switch (action.type) {
        //FETCH
        case actionType.STAFFS_LOADING:
            return { ...state, isLoading: true};

        case actionType.FETCH_STAFFS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                staffs: action.payload
            };
        
        case actionType.FETCH_STAFFS_FAILED:
            return {
                ...state,
                isLoading: false,
                errMess: action.payload
            };

        //ADD STAFF
        case actionType.ADD_STAFF_SUCCESS:
            return {
                ...state,
                isLoading: false,
                staffs: action.payload
            };

        //DELETE
        case actionType.DELETE_STAFF_LOADING:
            return {
                ...state,
                isLoading: true,
                errMess: null,
                staffs: []
            };

        case actionType.DELETE_STAFF_SUCCESS:
            const filteredStaffs = state.staffs.filter(
                (staff) => staff.id != action.payload
            );
            return {
                ...state,
                isLoading: false,
                staffs: filteredStaffs
            };

        //UPDATE
        case actionType.UPDATE_STAFFS_SUCCESS:
            return {
                ...state,
                staffs: action.payload
            };

        default:
            return state;
    }
};