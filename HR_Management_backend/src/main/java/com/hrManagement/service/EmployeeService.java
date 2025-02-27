package com.hrManagement.service;

import com.hrManagement.dto.EmployeeDTO;
import com.hrManagement.dto.UserLoginDTO;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface EmployeeService {

    EmployeeDTO addEmployee(EmployeeDTO employeeDTO);

    List<EmployeeDTO> getAllEmployees();

    Boolean deleteEmployee(String employeeId);

    ResponseEntity<UserLoginDTO> userLogin(UserLoginDTO userLoginDto);
}
