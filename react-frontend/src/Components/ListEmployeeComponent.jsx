import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmpService from '../Services/EmployeeService';

const ListEmployeeComponent = () => {
    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();
    const addEmployee = () => {
        navigate('/add-employee');
    }
    const editEmployee = (id) =>{
        navigate('/update-employee/'+id);
    }
    const deleteEmployee = (id) =>{
        EmpService.deleteEmployee(id);
        const result = employees.filter((employee) => employee.id !== id);
        setEmployees(result);
    }
    const viewEmployee = (id) => {
        navigate("/employees/view/"+id);
    }
    useEffect(() => {
        EmpService.getEmployees().then((res) => {
            setEmployees(res.data);
        });
    }, []);

    return (
        <div className="container">
                <h2 className="text-center">Employees List</h2>
                <div>
                    <button type="button" className='btn btn-primary btn-sm' onClick={addEmployee}>Add Employee</button>    
                </div>
                <div>
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr className="align-middle">
                                <th>Employee First Name</th>
                                <th>Employee Last Name</th>
                                <th>Employee Email ID</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employees.map(employee =>  
                                <tr key= {employee.id}  className="align-middle">
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.emailID}</td>
                                    <td className="p-1">
                                        <button className="btn btn-outline-primary m-1" onClick={() => editEmployee(employee.id)}>Update</button>
                                        <button className="btn btn-outline-danger m-1" onClick={() => deleteEmployee(employee.id)}>Delete</button>
                                        <button className="btn btn-outline-info m-1" onClick={() => viewEmployee(employee.id)}>View</button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
    )

}

export default ListEmployeeComponent;