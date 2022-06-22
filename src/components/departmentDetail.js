import React from 'react';
import { Link } from 'react-router-dom';
import { Component } from 'react/cjs/react.production.min';
import { Card, CardImg, CardBody, CardSubtitle, Button, Modal, Col, Form, Input,
ModalHeader, ModalBody, Row, Label, FormFeedback } from 'reactstrap';



class DepartmentDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
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
            },
            nameF: "",
            modalOpen: false
        };
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
            return (
                <div className='col-6 col-md-4 col-lg-2 mt-3'>
                    <div>
                    <Link to={`/nhanvien/${staff.id}`}>
                    <Card>
                    <CardImg width="100%" src={staff.image} alt={staff.name} />
                    <CardBody>
                        <CardSubtitle>{staff.name}</CardSubtitle>
                    </CardBody>
                    </Card>
            </Link>
                    </div>
                </div>
            )
        });

        //Render ra giao diện staff list
         return <div className='container'>
         <div className='row'>{menustaff}</div>
     </div>;
     
    }
}



export default DepartmentDetail;