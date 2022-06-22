import * as actionType from "./actionType";

//ADD STAFF
export const addStaffSuccess = (staff) => ({
    type: actionType.ADD_STAFF_SUCCESS,
    payload: staff
});

export const addStaff = (staff) => (dispatch) => {
    return fetch(baseUrl + "staffs", {
        method: "POST",
        body: JSON.stringify(staff),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
        .then(
            (response) => {
                if (response.ok) {
                    return response;
                }
                else {
                    var error = new Error(
                        "Error " + response.status + ": " + response.statusText
                    );
                    error.response = response;
                    throw error;
                }
            },
            (error) => {
                throw error;
            }
        )

        .then((response) => response.json())
        .then((response) => dispatch(addStaffSuccess(response)))
        .catch((error) => {
            console.log("Post staffs", error.message);
            alert("Your staff could not be posted\nError: " + error.message);
        });
};

//DELETE
export const deleteStaffSuccess = (id) => ({
    type: actionType.DELETE_STAFF_SUCCESS,
    payload: id
});

export const deleteStaffLoading = () => ({
    type: actionType.DELETE_STAFF_LOADING
});

export const deleteStaff = (id) => (dispatch) => {
    if (confirm("Are you sure to delete this staff?")) {
        return fetch(baseUrl + `staffs/${id}`, {
            method: "DELETE"
        }).then(() => dispatch(deleteStaffSuccess(id)));
    }
    else return;
};

//UPDATE
export const updateStaffSuccess = (staff) => ({
    type: actionType.UPDATE_STAFFS_SUCCESS,
    payload: staff
});

export const updateStaff = (staff) => (dispatch) => {
    return fetch(baseUrl + "staffs", {
        method: "PATCH",
        body: JSON.stringify(staff),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
        .then(
            (response) => {
                if (response.ok) {
                    return response;
                }
                else {
                    var error = new Error(
                        "Error " + response.status + ": " + response.statusText
                    );
                    error.response = response;
                    throw error;
                }
            },
            (error) => {
                throw error;
            }
        )

        .then((response) => response.json())
        .then((response) => dispatch(updateStaffSuccess(response)))
        .catch((error) => {
            console.log("Update staffs", error.message);
            alert("Your staff could not be updated\nError: " + error.message);
        });
};

//FETCH STAFF

export const fetchStaffs = () => (dispatch) => {
    dispatch(staffsLoading(true));
    return fetch(baseUrl + "staffs")
        .then((response) => response.json())
        .then((staffs) => dispatch(fetchStaffsSuccess(staffs)))
        .catch((error) => dispatch(fetchStaffsFailed(error.message)));
};

export const fetchStaffsFailed = (errmess) => ({
    type: actionType.FETCH_STAFFS_FAILED,
    payload: errmess
});

export const fetchStaffsSuccess = (staffs) => ({
    type: actionType.FETCH_STAFFS_SUCCESS,
    payload: staffs
});