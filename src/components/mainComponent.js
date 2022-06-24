import React from 'react';
import Header from './header';
import StaffList from './staffList';
import StaffDetail from './staffDetail';
import DepartmentDetail from './departmentDetail';
import PhongBan from './department';
import Salary from './luong';
import Footer from './footer';
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import { Component } from 'react/cjs/react.production.min';
import { addStaff, fetchStaffs, fetchDepartments, deleteStaff, updateStaff, fetchStaffsSalary} from "../redux/actionCreators";
import { connect } from "react-redux";
import {CSSTransition, TransitionGroup} from "react-transition-group";


//export const history = useHistory;
const mapStateToProps = (state) => {
  return {
    staffs: state.staffs,
    departments: state.departments,
    staffsSalary: state.staffsSalary
  };
}

const mapDispatchToProps = (dispatch) => ({
  addStaff: (newStaff) => {
    dispatch(addStaff(newStaff));
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
    
      const DepartmentById = ({ match }) => {
        return (
          <DepartmentDetail
            departments={this.props.departments.departments.filter(
                (department) => department.id === match.params.departmentId
              )[0]
            }
            staffs={this.props.staffs.staffs.filter(
              (staff) => staff.departmentId === match.params.departmentId
            )}
          />
        );
      };
    return(
      <div>
          <Header />
            <Switch location={this.props.location}>
              <Route exact path='/nhanvien' component={() => 
              <StaffList 
              //staffsLoading={this.props.staff.isLoading}
              addStaff={this.props.addStaff}
              staffs={this.props.staffs.staffs}
              onDeleteStaff={this.props.deleteStaff} />}/>
              <Route path="/nhanvien/:nhanvienId" component={StaffWithId} />
              <Route
                    path="/departments/:departmentId"
                    component={DepartmentById}
                  />
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