package com.hrManagement.controller;

import com.hrManagement.dto.EmployeeDTO;
import com.hrManagement.dto.UserLoginDTO;
import com.hrManagement.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping(value = "/api")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    //this will use to both save and update functionality
    @PostMapping("/addEmployee")
    public EmployeeDTO addEmployee(@RequestBody EmployeeDTO employeeDTO) {
        return employeeService.addEmployee(employeeDTO);
    }

    @GetMapping("/getAllEmployees")
    public List<EmployeeDTO> getAllEmployees() {
        return employeeService.getAllEmployees();
    }

    @PostMapping("deleteEmployee")
    public Boolean deleteEmployee(@RequestParam("employeeId") String employeeId) {
        return employeeService.deleteEmployee(employeeId);
    }

    @PostMapping("/userLogin")
    public ResponseEntity<UserLoginDTO> userLogin(@RequestBody UserLoginDTO userLoginDto){
        return employeeService.userLogin(userLoginDto);
    }



}
