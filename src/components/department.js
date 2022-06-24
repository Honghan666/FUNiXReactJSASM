import React from "react";
import { Card, CardTitle, CardBody, CardText} from "reactstrap";
import { Link } from 'react-router-dom';
import { FadeTransform, Fade } from "react-animation-components";



function RenderDept(props) {
    return (
        <FadeTransform in transformProps={{
            exitTransform: "scale(0.1) translateY(-1%)",
          }}>
            <Link to={`/departments/${props.dept.id}`}>
            <Card>
                <CardTitle className="m-2">{props.dept.name}</CardTitle>
                <CardBody>
                    <CardText>Số lượng nhân viên: {props.staffNo.length}</CardText>
                </CardBody>
            </Card>
        </Link>
        </FadeTransform>
    );
}

function PhongBan(props) {
    //dùng map() để fetch toàn bộ dữ liệu từ props của main component
    const departments = props.departments.map((department)=>{
        return(
        <div className='col-12 col-md-6 col-lg-4 mt-2 mb-2' key={department.id}>
        <Fade in>
        <RenderDept 
        dept={department}
        staffNo={props.staffs.filter(
            (staff) => staff.departmentId === department.id
        )} />
        </Fade>
        </div>
    );
});
     return <div className='container'>
     <div className='row m-3'>{departments}</div>
 </div>;
}

export default PhongBan;