package com.hrManagement.service;

import com.hrManagement.dto.DepartmentDTO;

import java.util.List;

public interface DepartmentService {


    DepartmentDTO addDepartment(DepartmentDTO departmentDTO);

    List<DepartmentDTO> getAllDepartments();

    Boolean deleteDepartment(String departmentId);
}
