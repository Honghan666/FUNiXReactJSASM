import React from "react";
import {
  Col,
  Row,
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardImg,
  CardText,
} from "reactstrap";
import { Link } from "react-router-dom";

const DepartmentDetail = (props) => {
  const staffs = props.staffs.map((staff) => {
    return (
      <Col xs={6} md={4} lg={2} key={staff.id}>
        <Link to={`/nhanvien/${staff.id}`}>
          <Card className="mt-2 p-1" outline color="info">
            <CardImg top src={staff.image}></CardImg>
            <CardText className="text-center" tag="h6">
              {staff.name}
            </CardText>
          </Card>
        </Link>
      </Col>
    );
  });
  
  return (
    <div className="container">
      <Row>
        <Col lg={5} xs={10} md={6}>
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/departments">Phòng ban</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>{props.departments.name}</BreadcrumbItem>
          </Breadcrumb>
        </Col>
      </Row>
      <Row className="mb-1">{staffs}</Row>
    </div>
  );
};

export default DepartmentDetail;