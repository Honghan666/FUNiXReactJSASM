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
  
  render() {
    const StaffWithId = ({ match }) => {
      return <StaffDetail staff={ this.state.staffs.filter(
          (item) => item.id === parseInt(match.params.nhanvienId, 10))[0]}/>
      }
      
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