import * as actionType from "./actionType";
import {baseUrl} from "../components/baseUrl";

//ADD STAFF
export const addStaffSuccess = (staff) => ({
    type: actionType.ADD_STAFF_SUCCESS,
    payload: staff
});

export const addStaff = (newStaff) => (dispatch) => {
      newStaff.salary = Math.round(newStaff.salaryScale * 3000000 + newStaff.overTime * 200000);
      newStaff.image = "/assets/images/alberto.png";

    return fetch(baseUrl + "staffs", {
        method: "POST",
        body: JSON.stringify(newStaff),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
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
    fetch(baseUrl + `staffs/${id}`, {
            method: "DELETE",
            statusCode: 204,
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "same-origin"
        })
        .then((response) => response.json())
        .then(() => dispatch(deleteStaffSuccess(id)))
        .catch((error) => {console.log(error.message)});
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

export const staffsLoading = (staffs) => ({
    type: actionType.STAFFS_LOADING,
    payload: staffs
});

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

// DEPARTMNT

export const loadDepartments = (departments) => ({
    type: actionType.DEPARTMENTS_LOADING,
    payload: departments
})

export const fetchDepartments = () => (dispatch) => {
    dispatch(loadDepartments(true));
    return fetch(baseUrl + "departments")
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
                var errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then((response) => response.json())
        .then((departments) => dispatch(fetchDepartmentsSuccess(departments)))
        .catch((error) => dispatch(fetchDepartmentsFailed(error.message)));
};

export const fetchDepartmentsFailed = (errMess) => ({
    type: actionType.DEPARTMENTS_FAILED,
    payload: errMess
});

export const fetchDepartmentsSuccess = (departments) => ({
    type: actionType.ADD_DEPARTMENT,
    payload: departments
});

//SALARY

export const salaryLoading = () => ({
    type: actionType.STAFFSSALARY_LOADING
});

export const fetchStaffsSalary = () => (dispatch) => {
    dispatch(salaryLoading(true));
    return fetch(baseUrl + "staffsSalary")
        .then((response) => response.json())
        .then((salary) => dispatch(fetchSalarySuccess(salary)))
        .catch((error) => dispatch(fetchSalaryFailed(error.message)));
};

export const fetchSalaryFailed = (errmess) => ({
    type: actionType.STAFFSSALARY_FAILED,
    payload: errmess
});

export const fetchSalarySuccess = (salary) => ({
    type: actionType.ADD_STAFFSSALARY,
    payload: salary
});