import React, {useState} from 'react';
import Header from './header';
import StaffList from './staffList';
import StaffDetail from './staffDetail';
import PhongBan from './department';
import Salary from './luong';
import Footer from './footer';
import { Switch, Route } from "react-router-dom";
import { STAFFS, DEPARTMENTS } from './staffs';

function Main() {
  const [state, setNhanvien] = useState({
    staffs: STAFFS,
    departments: DEPARTMENTS
  });

  const StaffWithId = ({ match }) => {
    return (
      <StaffDetail staff={ state.staffs.filter(
        (item) => item.id === parseInt(match.params.nhanvienId, 10)
      )[0]}/>
    )
  }

    return(
        <div>
            <Header />
            <Switch>
              <Route exact path='/nhanvien' component={() => <StaffList staffs={state.staffs} />}/>
              <Route path="/nhanvien/:nhanvienId" component={StaffWithId} />
              <Route path='/phongban' component={() => <PhongBan dept={state.departments} />}/>
              <Route path='/luong' component={() => <Salary sal={state.staffs} />} />
            </Switch>
            <Footer />
        </div>
    );
}



export default Main;