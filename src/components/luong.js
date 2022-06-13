import React from 'react';

const LuongCoBan = 3000000;
const LuongGio = 2000000;

function Salary(props) {
    const menustaff = props.sal.map(staff=>{
        return <div className='col-12 col-md-6 col-lg-4 mt-3'>
        <div className='card stafflist' key={staff.id}>
        <div className='card-body'>
                <h5 className='card-title'>{staff.name}</h5>
                <p className='card-text text-justify'>Mã nhân viên: {staff.id}</p>
                <p className='card-text text-justify'>Hệ số lương: {staff.salaryScale}</p>
                <p className='card-text text-justify'>Số ngày làm thêm: {staff.overTime}</p>
                <p className='card-text text-justify'> 
                    Lương: {" "}
                    {(staff.salaryScale * LuongCoBan + staff.overTime * LuongGio).toFixed(0)}
                </p>
            </div>
        </div>
    </div>
    })
     return <div className='container'>
     <div className='row'>{menustaff}</div>
 </div>;
}

export default Salary;