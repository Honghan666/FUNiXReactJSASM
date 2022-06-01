import React, { Component } from 'react';
import { Card, CardImg, CardTitle, CardBody, CardText } from 'reactstrap';

class StaffList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            onSelectedStaff: null,
            columDefault: "col-12 col-md-6 col-lg-4 mt-3"
        };
    }

    onStaffClick(staff) {
        this.setState({
            onSelectedStaff: staff
        });
    }

    renderStaff(staff) {
        if( staff != null) {
            return (
                <div className='col-12'>
                    <Card>
                        <CardImg width="100%" src={staff.image} alt={staff.name} />
                        <CardBody>
                            <CardTitle>Họ và Tên: {staff.name}</CardTitle>
                            <CardText>
                                Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}
                            </CardText>
                            <CardText>
                                Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}
                            </CardText>
                            <CardText>Phòng ban: {staff.department.name}</CardText>
                            <CardText>Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
                            <CardText>Số ngày đã làm thêm: {staff.overTime}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        }
        else {
            return <div></div>;
        }
    }



    render() {
        console.log(this.props.staffs)
        const menustaff = this.props.staffs.map((staff) => {
            return (
                    <div className={this.state.columDefault}>
                        <Card key={staff.id} onClick={() => this.onStaffClick(staff)}>
                            <CardBody>
                                <CardTitle>{staff.name}</CardTitle>
                            </CardBody>
                        </Card>
                    </div>
            );
        });
        return (
            <div className='container'>
                <div className='row'>{menustaff}</div>
                <div>
                    {this.renderStaff(this.state.onSelectedStaff)}
                </div>
            </div>
        );
    }

    
}

export default StaffList;