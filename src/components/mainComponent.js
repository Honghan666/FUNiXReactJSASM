import React, {useState} from 'react';
import Header from './header';
import StaffList from './staffList';
import StaffDetail from './staffDetail';
import PhongBan from './department';
import Salary from './luong';
import Footer from './footer';
import { Switch, Route } from "react-router-dom";
import { STAFFS, DEPARTMENTS } from './staffs';
import { Component } from 'react/cjs/react.production.min';
import { addStaff, fetchStaffs, fetchDepartments, deleteStaff, updateStaff} from "../redux/actionCreators";

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
  fetchDepartments: () => {
    dispatch(fetchDepartments());
  },
  fetchStaffsSalary: () => {
    dispatch(fetchStaffsSalary());
  },
  deleteStaff: (id) => {
    dispatch(deleteStaff(id));
  },
  updateStaff: (staff) => {
    dispatch(updateStaff(staff));
  },
});

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs: STAFFS,
      departments: DEPARTMENTS
    };
    this.addStaff = this.addStaff.bind(this);
  }
    

  addStaff = (staff) => {
    const id = Math.floor(Math.random() * 10000 + 1);
    const newStaff = { id, ...staff };
    this.setState({
      staffs: [...this.state.staffs, newStaff]
    });
    console.log(newStaff);
    console.log(this.state.staffs);
  }

  componentDidMount() {
    this.props.fetchStaffs();
    this.props.fetchDepartments();
    this.props.fetchStaffsSalary();
  }
  
  render() {
    const StaffWithId = ({ match }) => {
      return <StaffDetail staff={ this.state.staffs.filter(
          (item) => item.id === parseInt(match.params.nhanvienId, 10))[0]}
        dept = {this.props.departments.departments}
        onUpdateStaff={this.props.updateStaff}  
        />
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
            <Route exact path='/nhanvien' component={() => <StaffList onAdd={this.addStaff} staffs={this.state.staffs} />}/>
            <Route path="/nhanvien/:nhanvienId" component={StaffWithId} />
            <Route path='/phongban' component={() => <PhongBan dept={this.state.departments} />}/>
            <Route path='/luong' component={() => <Salary sal={this.state.staffs} />} />
          </Switch>
          <Footer />
      </div>
    );
  }
    
}



export default Main;