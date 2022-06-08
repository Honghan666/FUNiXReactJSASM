import React, {useState} from 'react';
import Header from './header';
import StaffList from './staffList';
import StaffDetail from './staffDetail';
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
            </Switch>
            <Footer />
        </div>
    );
}



export default Main;