package com.example.employee.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import com.example.employee.model.Employee;
import com.example.employee.service.EmployeeService;


@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {
	
	@Autowired
	private EmployeeService employeeService;
	
	/*Get all the employee information in DB*/
	@GetMapping("/employees")
	public List<Employee> getAllEmployees(){
		return employeeService.getEmployees();
	}
	
	/* Creating employees by given body data */
	@PostMapping("/employees")
	public void createEmployeees(@RequestBody Employee employee) {
		employeeService.addEmployee(employee);
	}
	
	/* Get Employee by id as reference */
	@GetMapping("/employees/{id}")
	public Employee getEmployeeById(@PathVariable Long id) {
		return employeeService.getEmployeeById(id);
	}
	
	/* Update the data in the existing entity */
	@PutMapping("/employees/{id}")
	public ResponseEntity<Employee> updateEmployeeById(@RequestBody Employee emp, @PathVariable Long id){
		return employeeService.updateEmployee(emp, id);
	}

	/* Delete the employee with id */
	@DeleteMapping("employees/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteEmployeeByID(@PathVariable Long id, @RequestParam(required = false) String firstName,
	@RequestParam(name="secondName", required = false) String lastName){
		return employeeService.deleteEmployee(id, firstName, lastName);
	}
}
