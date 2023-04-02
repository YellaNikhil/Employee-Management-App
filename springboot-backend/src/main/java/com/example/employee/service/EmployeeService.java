package com.example.employee.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.employee.repository.EmployeeRepository;

import io.micrometer.common.lang.Nullable;

import com.example.employee.exception.ResourceNotFoundException;
import com.example.employee.model.Employee;

@Service
public class EmployeeService {
   
    @Autowired
    private EmployeeRepository employeeRepository;
    
    public List<Employee> getEmployees(){
        return employeeRepository.findAll();
    }
    
    public void addEmployee(Employee employee){
        employeeRepository.save(employee);
    }

    public ResponseEntity<Employee> updateEmployee(Employee employee, Long id){
        Employee resultEmployee =  employeeRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id : " + id));
		resultEmployee.setFirstName(employee.getFirstName());
		resultEmployee.setLastName(employee.getLastName());
		resultEmployee.setEmailID(employee.getEmailID());
		Employee updatedEmployee = employeeRepository.save(resultEmployee);
		return ResponseEntity.ok(updatedEmployee);
    }
    
    // public ResponseEntity<Employee> getEmployeeById(Long id){
    //     Employee resultEmployee =  employeeRepository.findById(id)
		// 		.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id : " + id));
		// return ResponseEntity.ok(resultEmployee);
    // }

    public Employee getEmployeeById(Long id){
      Employee resultEmployee = employeeRepository.findById(id)
      .orElseThrow(() -> new ResourceNotFoundException("Employee does not exist with id" + id));
      return resultEmployee;
    }

    public ResponseEntity<Map<String, Boolean>> deleteEmployee(Long id, @Nullable String firstName, @Nullable String lastName){
      Employee emp = employeeRepository.findById(id)
          .orElseThrow(() -> new ResourceNotFoundException("Employee not exist with this id : " + id));
		  // return lastName == null ? "No param" : "Param";
      employeeRepository.delete(emp);
      Map<String, Boolean> response = new HashMap<>();
      response.put("Deleted Successfully", Boolean.TRUE);
      return ResponseEntity.ok(response);
    }
}
