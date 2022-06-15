import React from 'react';
import { Link } from 'react-router-dom';
import { Component } from 'react/cjs/react.production.min';

class StaffList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nameF: "",
            modalOpen: false,
            doB: "",
            salaryScale: 1,
            startDate: "",
            department: "Sale",
            annualLeave: 0,
            overTime: 0,
            salary: 30000,
            image: "/assets/images/alberto.png",
            touched: {
                name: false,
                doB: false,
                salaryScale: false,
                startDate: false,
                department: false,
                annualLeave: false,
                overTime: false
            }
        };
        this.timNhanVien = this.timNhanVien.bind(this);
    }
    
    

    timNhanVien(event) {
        event.preventDefault();
        const nameS = event.target.nameS.value;
        this.setState({nameF: nameS});
    }
    
    render() {
        const menustaff = this.props.staffs
        .filter((staff) => {
            if (this.state.nameF === "") return staff;
            else if (staff.name.toLowerCase().includes(this.state.nameF.toLowerCase()))
            return staff;
            return 0;
        })
        .map(staff=>{
            return <div className='col-6 col-md-4 col-lg-2 mt-3'>
            <div className='card stafflist' key={staff.id}>
            <Link to={`/nhanvien/${staff.id}`}><img width="100%" src={staff.image} alt={staff.name} className='rounded mx-auto d-block'/></Link>
                <div className='card-body'>
                    <p className='name text-center'>{staff.name}</p>
                </div>
            </div>
        </div>
        });
         return <div className='container'>
            <div className='row'>
                <div className='col-12 col-md-6 mt-3'>
                        <div className='col-10 col-md-10'>
                        Thêm nhân viên  <button className='add-btn'><span className='ti-cloud-up'></span></button>
                        </div>
                </div>
                <div className='col-12 col-md-6 mt-3'>
                    <form onSubmit={this.timNhanVien} className='form-group row'>
                        <div className='col-8 col-md-8'>
                            <input
                                type="text"
                                name="nameS"
                                className='form-control'
                                placeholder='Tìm kiếm nhân viên' 
                            />
                        </div>
                        <div className='col-4 col-md-4'>
                            <button className='btn btn-success' type='submit'>Tìm</button>
                        </div>
                    </form>
                </div>
            </div>
         <div className='row'>{menustaff}</div>
     </div>;
    }
}



export default StaffList;