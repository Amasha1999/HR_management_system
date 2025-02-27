package com.hrManagement.service.impl;

import com.hrManagement.dto.DepartmentDTO;
import com.hrManagement.dto.EmployeeDTO;
import com.hrManagement.entity.Department;
import com.hrManagement.entity.Employee;
import com.hrManagement.repo.DepartmentRepository;
import com.hrManagement.repo.EmployeeRepository;
import com.hrManagement.service.DepartmentService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class DepartmentServiceImpl implements DepartmentService {

    @Autowired
    private ModelMapper modelMapper;
    @Autowired
    private DepartmentRepository departmentRepository;

    @Override
    public DepartmentDTO addDepartment(DepartmentDTO departmentDTO) {
        try {
            Department department = modelMapper.map(departmentDTO, Department.class);
            Department savedDepartment = departmentRepository.save(department);
            return modelMapper.map(savedDepartment, DepartmentDTO.class);
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException("Error saving employee: " + e.getMessage());
        }
    }

    @Override
    public List<DepartmentDTO> getAllDepartments() {
        List<DepartmentDTO> departmentDTOList = new ArrayList<>();
        List<Department> all = departmentRepository.findAll();
        for (Department obj : all) {
            DepartmentDTO departmentDTO = modelMapper.map(obj, DepartmentDTO.class);
            departmentDTOList.add(departmentDTO);
        }
        return departmentDTOList;
    }

    @Override
    public Boolean deleteDepartment(String departmentId) {
        try {
            if (departmentId != null && departmentRepository.existsById(departmentId)) {
                departmentRepository.deleteById(departmentId);
                return true;
            }
            return false;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }
}