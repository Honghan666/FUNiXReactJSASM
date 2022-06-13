import React from 'react';
import dateFormat from 'dateformat';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function StaffDetail(props) {
    if(props.staff != null) {
        return (
            <div className='container'>
                <div className='row'>
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/nhanvien">Nhân viên</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>
                            {props.staff.name}
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <div className='col-12'>
                        <h3>{props.staff.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className='row mb-3'>
                    <RenderStaff staff={props.staff} />
                </div>
            </div> 
        );
    } 
    else {
        return <div></div>;
    }
}

function RenderStaff({staff}) {
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
            </div>
        );
    }
    else {
        return <div></div>;
    }
}

export default StaffDetail;