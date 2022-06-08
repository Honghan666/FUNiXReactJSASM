import React from 'react';

function StaffList(props) {
    const menustaff = props.staffs.map(staff=>{
        return <div className='col-6 col-md-4 col-lg-2 mt-3'>
        <div className='card stafflist' key={staff.id} onClick={() => this.staffClick(staff)}>
        <img width="100%" src={staff.image} alt={staff.name} className='rounded mx-auto d-block' />
            <div className='card-body'>
                <p className='name text-center'>{staff.name}</p>
            </div>
        </div>
    </div>
    })
     return <div className='container'>
     <div className='row'>{menustaff}</div>
 </div>;
}

export default StaffList;