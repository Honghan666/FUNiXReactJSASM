import React, {Component} from 'react';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import StaffList from './components/StaffListComponent';
import {STAFFS} from './components/staffs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs: STAFFS
    }
  }

  

  render() {
    return (
      <div>
        <Navbar dark color='primary'>
          <div className='container'>
            <h2 className='navbar-brand text-center'>Ứng dụng quản lý nhân sự v1.0</h2>
          </div>
        </Navbar>
        <StaffList staffs={this.state.staffs} />
      </div>
    )
  }
}

export default App;

