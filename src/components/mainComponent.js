import React, {useState} from 'react';
import Header from './header';
import StaffList from './staffList';
import StaffDetail from './staffDetail';
import DepartmentDetail from './departmentDetail';
import PhongBan from './department';
import Salary from './luong';
import Footer from './footer';
import { Switch, Route, withRouter, useHistory, Redirect } from "react-router-dom";
import { STAFFS, DEPARTMENTS } from './staffs';
import { Component } from 'react/cjs/react.production.min';
import { addStaff, fetchStaffs, fetchDepartments, deleteStaff, updateStaff, fetchStaffsSalary} from "../redux/actionCreators";
import { connect } from "react-redux";


//export const history = useHistory;
const mapStateToProps = (state) => {
  return {
    staffs: state.staffs,
    departments: state.departments,
    staffsSalary: state.staffsSalary
  };
}

const mapDispatchToProps = (dispatch) => ({
  addStaff: (staff) => {
    dispatch(addStaff(staff));
  },
  fetchStaffs: () => {
    dispatch(fetchStaffs());
  },
  fetchStaffsSalary: () => {
    dispatch(fetchStaffsSalary());
  },
  fetchDepartments: () => {
    dispatch(fetchDepartments());
  },
  deleteStaff: (id) => {
    dispatch(deleteStaff(id));
  },
  updateStaff: (staff) => {
    dispatch(updateStaff(staff));
  },
});

class Main extends Component {
  componentDidMount() {
    this.props.fetchStaffs();
    this.props.fetchDepartments();
    this.props.fetchStaffsSalary();
  }

  render() {
    const StaffWithId = ({ match }) => {
      return (
         <StaffDetail staff={ this.props.staffs.staffs.filter(
            (staff) => staff.id === parseInt(match.params.nhanvienId, 10))[0]}
          dept = {this.props.departments.departments}
          onUpdateStaff={this.props.updateStaff}  
          />
        );
      };
    
    const StaffWithDept = ({ match }) => {
      return (
          <DepartmentDetail
            dept = {
              this.props.departments.departments.filter(
                (dept) => dept.id === match.params.deptId
              )[0]
            }
            staff = {this.props.staffs.staffs.filter(
              (staff) => staff.departmentId === match.params.deptId
            )}
          />
        );
      };
      
    return(
      <div>
          <Header />
          <Switch>
            <Route exact path='/nhanvien' component={() => 
            <StaffList 
            //staffsLoading={this.props.staff.isLoading}
            onAddStaff={this.props.addStaff}
            staffs={this.props.staffs.staffs}
            onDeleteStaff={this.props.deleteStaff} />}/>
            <Route path="/nhanvien/:nhanvienId" component={StaffWithId} />
            <Route path="/departments/deptId" component={StaffWithDept} />
            <Route path='/departments' component={() => 
            <PhongBan 
            departments={this.props.departments.departments}
            staffs={this.props.staffs.staffs} 
            />}/>
            <Route path='/salary' component={() => <Salary sal={this.props.staffsSalary.staffsSalary} />} />
            <Redirect to="/nhanvien" />
          </Switch>
          <Footer />
      </div>
    );
  }
    
}



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));