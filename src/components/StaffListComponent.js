import React, { Component } from 'react';
import { Media } from 'react';

class StaffList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            staffs: [
                {
                    id: 0,
                    name: "Nguyễn Văn A",
                    doB: "1999-01-01T08:59:00.000Z",
                    salaryScale: 1.1,
                    startDate: "2019-04-30T08:59:00.000Z",
                    annualLeave: 1,
                    overTime: 1,
                    image: '/assets/images/alberto.png',
                },
                {
                    id: 1,
                    name: "Nguyễn Văn B",
                    doB: "2000-01-01T08:59:00.000Z",
                    salaryScale: 1.2,
                    startDate: "2019-04-30T08:59:00.000Z",
                    annualLeave: 2,
                    overTime: 3,
                    image: '/assets/images/alberto.png',
                },
                {
                    id: 2,
                    name: "Nguyễn Văn C",
                    doB: "2001-01-01T08:59:00.000Z",
                    salaryScale: 1,
                    startDate: "2019-04-30T08:59:00.000Z",
                    annualLeave: 4,
                    overTime: 5,
                    image: '/assets/images/alberto.png',
                },
                {
                    id: 3,
                    name: "Nguyễn Văn D",
                    doB: "2002-01-01T08:59:00.000Z",
                    salaryScale: 1,
                    startDate: "2019-04-30T08:59:00.000Z",
                    annualLeave: 6,
                    overTime: 7,
                    image: '/assets/images/alberto.png',
                },
                {
                    id: 4,
                    name: "Nguyễn Văn E",
                    doB: "1999-01-01T08:59:00.000Z",
                    salaryScale: 1,
                    startDate: "2019-04-30T08:59:00.000Z",
                    annualLeave: 8,
                    overTime: 1,
                    image: '/assets/images/alberto.png',
                },
                {
                    id: 5,
                    name: "Nguyễn Văn F",
                    doB: "2003-01-01T08:59:00.000Z",
                    salaryScale: 1,
                    startDate: "2019-04-30T08:59:00.000Z",
                    annualLeave: 9,
                    overTime: 10,
                    image: '/assets/images/alberto.png',
                },
                {
                    id: 6,
                    name: "Nguyễn Văn F",
                    doB: "2003-01-01T08:59:00.000Z",
                    salaryScale: 1,
                    startDate: "2019-04-30T08:59:00.000Z",
                    annualLeave: 9,
                    overTime: 10,
                    image: '/assets/images/alberto.png',
                },
                {
                    id: 7,
                    name: "Nguyễn Văn F",
                    doB: "2003-01-01T08:59:00.000Z",
                    salaryScale: 1,
                    startDate: "2019-04-30T08:59:00.000Z",
                    annualLeave: 9,
                    overTime: 10,
                    image: '/assets/images/alberto.png',
                },
                {
                    id: 8,
                    name: "Nguyễn Văn F",
                    doB: "2003-01-01T08:59:00.000Z",
                    salaryScale: 1,
                    startDate: "2019-04-30T08:59:00.000Z",
                    annualLeave: 9,
                    overTime: 10,
                    image: '/assets/images/alberto.png',
                },
                {
                    id: 9,
                    name: "Nguyễn Văn F",
                    doB: "2003-01-01T08:59:00.000Z",
                    salaryScale: 1,
                    startDate: "2019-04-30T08:59:00.000Z",
                    annualLeave: 9,
                    overTime: 10,
                    image: '/assets/images/alberto.png',
                },
                {
                    id: 10,
                    name: "Nguyễn Văn F",
                    doB: "2003-01-01T08:59:00.000Z",
                    salaryScale: 1,
                    startDate: "2019-04-30T08:59:00.000Z",
                    annualLeave: 9,
                    overTime: 10,
                    image: '/assets/images/alberto.png',
                },
                {
                    id: 11,
                    name: "Nguyễn Văn F",
                    doB: "2003-01-01T08:59:00.000Z",
                    salaryScale: 1,
                    startDate: "2019-04-30T08:59:00.000Z",
                    annualLeave: 9,
                    overTime: 10,
                    image: '/assets/images/alberto.png',
                },
                {
                    id: 12,
                    name: "Nguyễn Văn F",
                    doB: "2003-01-01T08:59:00.000Z",
                    salaryScale: 1,
                    startDate: "2019-04-30T08:59:00.000Z",
                    annualLeave: 9,
                    overTime: 10,
                    image: '/assets/images/alberto.png',
                },
                {
                    id: 13,
                    name: "Nguyễn Văn F",
                    doB: "2003-01-01T08:59:00.000Z",
                    salaryScale: 1,
                    startDate: "2019-04-30T08:59:00.000Z",
                    annualLeave: 9,
                    overTime: 10,
                    image: '/assets/images/alberto.png',
                },
                {
                    id: 14,
                    name: "Nguyễn Văn F",
                    doB: "2003-01-01T08:59:00.000Z",
                    salaryScale: 1,
                    startDate: "2019-04-30T08:59:00.000Z",
                    annualLeave: 9,
                    overTime: 10,
                    image: '/assets/images/alberto.png',
                },
                {
                    id: 15,
                    name: "Nguyễn Văn F",
                    doB: "2003-01-01T08:59:00.000Z",
                    salaryScale: 1,
                    startDate: "2019-04-30T08:59:00.000Z",
                    annualLeave: 9,
                    overTime: 10,
                    image: '/assets/images/alberto.png',
                }
            ]
        }
        this.sayHello = this.sayHello.bind(this);
    }

    sayHello(data) {
        alert('hi')
    }



    render() {
        let menustaff = this.state.staffs.map((staff) => {
            return (
                    <li id='list' className='col-10 mt-5 border rounded'>{staff.name}</li>
            );
        });
        return (
            <div className='container'>
                <div className='row'>
                        <ul className='mt-5'>{menustaff}</ul>
                </div>
            </div>
        );
    }

    
}

export default StaffList;