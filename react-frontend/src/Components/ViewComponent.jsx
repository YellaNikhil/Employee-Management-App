import EmpService from "../Services/EmployeeService";
import { useState, useParams, useEffect } from "react";

const ViewComponent = () =>{
    const {id} = useParams();
    const [employee, setEmployee] = useState();
    useEffect(() => {
        EmpService.getEmployeeByID(id).then((res) => {
            setEmployee(res.data);
        })
    },[id]);
    return (<div className="container m-3">
              <div className="row">
                  <h1 className="text-center">Employee Information</h1>
                </div>
                <div>
                  <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <td>First Name</td>
                            <td>{employee.firstName}</td>
                        </tr>
                        <tr>
                            <td>Second Name</td>
                            <td>{employee.lastName}</td>
                        </tr>
                        <tr>
                            <td>Email ID</td>
                            <td>{employee.emailID}</td>
                        </tr>
                    </thead>
                  </table>
                </div>
                </div>);
}

export default ViewComponent;