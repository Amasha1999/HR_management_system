package com.hrManagement.controller;

import com.hrManagement.dto.DepartmentDTO;
import com.hrManagement.service.DepartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping(value = "/api")
@Component
public class DepartmentController {

    @Autowired
    private DepartmentService departmentService;

    //this will use to both save and update functionality
    @PostMapping("/addDepartment")
    public DepartmentDTO addDepartment(@RequestBody DepartmentDTO departmentDTO) {
        return departmentService.addDepartment(departmentDTO);
    }

    @GetMapping("/getAllDepartments")
    public List<DepartmentDTO> getAllDepartments() {
        return departmentService.getAllDepartments();
    }

    @PostMapping("deleteDepartment")
    public Boolean deleteDepartment(@RequestParam("departmentId") String departmentId) {
        return departmentService.deleteDepartment(departmentId);
    }



}
