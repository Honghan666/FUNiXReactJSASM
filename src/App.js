import React, {Component} from 'react';
import './App.css';
import { Navbar} from 'reactstrap';
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
        <Navbar dark className='color'>
          <div className='container'>
            <p className='navbar-brand text-center'>Ứng dụng quản lý nhân sự v1.0</p>
          </div>
        </Navbar>
        <StaffList staffs={this.state.staffs} />
      </div>
    )
  }
}

export default App;

