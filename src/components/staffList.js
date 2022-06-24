import React from 'react';
import { Link } from 'react-router-dom';
import { Component } from 'react/cjs/react.production.min';
import { Card, CardImg, CardBody, CardSubtitle, Button, Modal, Col, Form, Input,
ModalHeader, ModalBody, Row, Label, FormFeedback } from 'reactstrap';
import { FadeTransform, Fade } from "react-animation-components";

const RenderStaffItem = ({ staff, onDeleteStaff }) => {
    return (
        <FadeTransform in
        transformProps={{
          exitTransform: "scale(0.1) translateY(-1%)",
        }}>
            <div>
            <Link to={`/nhanvien/${staff.id}`}>
                <Card>
                    <CardImg width="100%" src={staff.image} alt={staff.name} />
                    <CardBody>
                        <CardSubtitle>{staff.name}</CardSubtitle>
                    </CardBody>
                </Card>
            </Link>
            <Button className="del-btn" color="danger" onClick={() => onDeleteStaff(staff.id)}>Xóa</Button>
        </div>
        </FadeTransform>
    )
}


class StaffList extends Component {
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

        //Ràng buộc 2 chiều đối với các hàm khai báo bên dưới
        this.timNhanVien = this.timNhanVien.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    
    toggleModal() {
        this.setState({
            modalOpen: !this.state.modalOpen
        });
    }

    //Tìm kiếm từ khóa tên nhân viên và render ra kết quả tìm kiếm nhân viên
    timNhanVien(event) {
        event.preventDefault();
        const nameS = event.target.nameS.value;
        this.setState({nameF: nameS});
    }

    handleBlur = (field) => (event) => (
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        })
    );
    
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = () => {
        const newStaff = {
            name: this.state.name,
            doB: this.state.doB,
            salaryScale: this.state.salaryScale,
            startDate: this.state.startDate,
            departmentId: this.state.department,
            annualLeave: this.state.annualLeave,
            overTime: this.state.overTime,
            image: this.state.image
        };
        this.props.addStaff(newStaff);
    };

    validate(name, department, salaryScale, doB, startDate, annualLeave, overTime) {
        const errors = {
            name: "",
            department: "",
            doB: "",
            startDate: "",
            salaryScale: "",
            annualLeave: "",
            overTime: ""
        };

        if (this.state.touched.name && name.length < 3) {
            errors.name = "Ten phai lon hon 3 ky tu";
        }
        else if (this.state.touched.name && name.length > 20) {
            errors.name = "Ten phai nho hon 20 ky tu";
        }
        if (this.state.touched.department && department.length < 1) {
            errors.department = "*";
        }
        if (this.state.touched.salaryScale && salaryScale.length < 1) {
            errors.salaryScale = "*";
        }
        if (this.state.touched.annualLeave && annualLeave.length < 1) {
            errors.annualLeave = "*";
        }
        if (this.state.touched.overTime && overTime.length < 1) {
            errors.overTime = "*";
        }
        if (this.state.touched.doB && doB.length < 1) {
            errors.doB = "*";
        }
        if (this.state.touched.startDate && startDate.length < 1) {
            errors.startDate = "*";
        }
        return errors;
    }




    render() {
        const errors = this.validate(this.state.name, this.state.department, this.state.salaryScale, this.state.doB,
            this.state.startDate, this.state.annualLeave, this.state.overTime);
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
                    <Fade in>
                        <RenderStaffItem staff={staff} onDeleteStaff={this.props.onDeleteStaff} />
                    </Fade>
                </div>
            )
        });

        //Render ra giao diện staff list
         return <div className='container'>
            <div className='row'>
                <div className='col-12 col-md-6 mt-3'>
                        <div className='col-10 col-md-10'>
                        Thêm nhân viên  <button outline onClick={this.toggleModal} className='add-btn'><span className='ti-cloud-up'></span></button>
                        </div>
                </div>
                <div className='col-12 col-md-6 mt-3'>
                    <form onSubmit={this.timNhanVien} className='form-group row'>
                        <div className='col-6 col-md-6 col-lg-6'>
                            <input
                                type="text"
                                name="nameS"
                                className='form-control'
                                placeholder='Tìm kiếm nhân viên' 
                            />
                        </div>
                        <div className='col-6 col-md-6 col-lg-4'>
                            <button className='btn btn-search' type='submit'><span className='ti-search'></span></button>
                        </div>
                    </form>
                </div>
            </div>
            <div className='col-12'>
                <Modal isOpen={this.state.modalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Thêm nhân viên</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <Row className='control-group'>
                                <Label htmlFor="name" md={4}>Họ và tên: </Label>
                                <Col md={8}>
                                    <Input type="text" className="form-control" id="name" name="name" value={this.state.name}
                                    valid={errors.name === ""} invalid={errors.name !== ""} onBlur={this.handleBlur("name")} onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.name}</FormFeedback>
                                </Col>
                            </Row>
                            <Row className='control-group'>
                                <Label htmlFor="doB" md={4}>Ngày sinh</Label>
                                <Col md={8}>
                                    <Input type="date" className="form-control" id="doB" name="doB" value={this.state.doB}
                                    valid={errors.doB === ""} invalid={errors.doB !== ""} onBlur={this.handleBlur("doB")} onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.doB}</FormFeedback>
                                </Col>
                            </Row>
                            <Row className='control-group'>
                                <Label htmlFor="startDate" md={4}>Ngày vào công ty</Label>
                                <Col md={8}>
                                    <Input type="date" className="form-control" id="startDate" name="startDate" value={this.state.startDate}
                                    valid={errors.startDate === ""} invalid={errors.startDate !== ""} onBlur={this.handleBlur("startDate")} onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.startDate}</FormFeedback>
                                </Col>
                            </Row>
                            <Row className='control-group'>
                                <Label htmlFor="deparment" md={4}>Phòng ban</Label>
                                <Col md={8}>
                                    <Input type="select" className="form-control" id="department" name="department" value={this.state.department}
                                    valid={errors.department === ""} invalid={errors.department !== ""} onBlur={this.handleBlur("department")} onChange={this.handleInputChange}>
                                        <option>Sale</option>
                                        <option>HR</option>
                                        <option>Marketing</option>
                                        <option>IT</option>
                                        <option>Finance</option>
                                    </Input>
                                    <FormFeedback>{errors.department}</FormFeedback>
                                </Col>
                            </Row>
                            <Row className='control-group'>
                                <Label htmlFor="salaryScale" md={4}>Hệ số lương</Label>
                                <Col md={8}>
                                    <Input type="text" className="form-control" id="salaryScale" name="salaryScale" value={this.state.salaryScale}
                                    valid={errors.salaryScale === ""} invalid={errors.salaryScale !== ""} onBlur={this.handleBlur("salaryScale")} onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.salaryScale}</FormFeedback>
                                </Col>
                            </Row>
                            <Row className='control-group'>
                                <Label htmlFor="annualLeave" md={4}>Ngày nghỉ còn lại</Label>
                                <Col md={8}>
                                    <Input type="text" className="form-control" id="annualLeave" name="annualLeave" value={this.state.annualLeave}
                                    valid={errors.annualLeave === ""} invalid={errors.annualLeave !== ""} onBlur={this.handleBlur("annualLeave")} onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.annualLeave}</FormFeedback>
                                </Col>
                            </Row>
                            <Row className='control-group'>
                                <Label htmlFor="overTime" md={4}>Số ngày đã làm thêm</Label>
                                <Col md={8}>
                                    <Input type="text" className="form-control" id="overTime" name="overTime" value={this.state.overTime}
                                    valid={errors.overTime === ""} invalid={errors.overTime !== ""} onBlur={this.handleBlur("overTime")} onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.overTime}</FormFeedback>
                                </Col>
                            </Row>
                            <Button type="submit" className="btn">Thêm</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
         <div className='row'>{menustaff}</div>
        
     </div>;
     
    }
}



export default StaffList;