import React, { Component } from 'react';
import dateFormat from 'dateformat';

class StaffList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            check: null
        };
    }

    staffClick(staff) {
        this.setState({
            check: staff
        });
    }

    closeStaff(staff) {
        this.setState({
            check: null
        });
    }

    staffDetail(staff) {
        if(staff != null) {
            return (
                <div className='col-5 mx-auto card staff-detail card-detail'>
                    <img width="35%" src={staff.image} alt={staff.name} className='rounded mx-auto d-block' />
                        <div className='card-body'>
                            <p>Họ và Tên: {staff.name}</p>
                            <p>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</p>
                            <p>Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}</p>
                            <p>Phòng ban: {staff.department.name}</p>
                            <p>Số ngày nghỉ còn lại: {staff.annualLeave}</p>
                            <p>Số ngày đã làm thêm: {staff.overTime}</p>
                        </div>
                    <button type='button' className='btn mx-auto' onClick={() => this.closeStaff(staff)}>Đóng</button>
                </div>
            );
        }
        else {
            return <div></div>;
        }
    }

    render() {
        const menustaff = this.props.staffs.map((staff) => {
            return (
                    <div className='col-12 col-md-6 col-lg-4 mt-3'>
                        <div className='card stafflist' key={staff.id} onClick={() => this.staffClick(staff)}>
                            <div className='card-body'>
                                <p className='name'>{staff.name}</p>
                            </div>
                        </div>
                    </div>
            );
        });
        return (
            <div className='container'>
                <div className='row'>{menustaff}</div>
                <div className='row mt-3'>
                    {this.staffDetail(this.state.check)}
                </div>
            </div>
        );
    } 
}

export default StaffList;