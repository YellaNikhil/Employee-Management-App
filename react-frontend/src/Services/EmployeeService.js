import axios from 'axios';

export const EMPLOYEE_API_BASE_URL = 'http://localhost:8080/api/v1/employees';
class EmployeeService{
        
    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    getEmployeeByID(id){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + id);
    }
    
    addEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }

    updateEmployee(employee, id){
        return axios.put(EMPLOYEE_API_BASE_URL+'/'+id, employee);
    }

    deleteEmployee(id){
        return axios.delete(EMPLOYEE_API_BASE_URL+'/'+id);
    }
}
const EmpService = new EmployeeService();
export default EmpService;