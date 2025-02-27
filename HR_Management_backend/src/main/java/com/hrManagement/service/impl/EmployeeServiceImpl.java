package com.hrManagement.service.impl;

import com.hrManagement.dto.EmployeeDTO;
import com.hrManagement.dto.UserLoginDTO;
import com.hrManagement.entity.Employee;
import com.hrManagement.entity.UserLogin;
import com.hrManagement.repo.EmployeeRepository;
import com.hrManagement.repo.UserLoginRepository;
import com.hrManagement.service.EmployeeService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    private ModelMapper modelMapper;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private EmployeeRepository employeeRepository;
    @Autowired
    private UserLoginRepository userLoginRepository;

    @Override
    public EmployeeDTO addEmployee(EmployeeDTO employeeDTO) {
        try {
            Employee employee = modelMapper.map(employeeDTO, Employee.class);
            Employee savedEmployee = employeeRepository.save(employee);
            return modelMapper.map(savedEmployee, EmployeeDTO.class);
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException("Error saving employee: " + e.getMessage());
        }
    }

    @Override
    public List<EmployeeDTO> getAllEmployees() {
        List<EmployeeDTO> employeeDTOList = new ArrayList<>();
        List<Employee> all = employeeRepository.findAll();
        for (Employee obj : all) {
            EmployeeDTO employeeDTO = modelMapper.map(obj, EmployeeDTO.class);
            employeeDTOList.add(employeeDTO);
        }
        return employeeDTOList;
    }

    @Override
    public Boolean deleteEmployee(String employeeId) {
        try {
            if (employeeId != null && employeeRepository.existsById(employeeId)) {
                employeeRepository.deleteById(employeeId);
                return true;
            }
            return false;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public ResponseEntity<UserLoginDTO>userLogin(UserLoginDTO userLoginDto) {
        System.err.println("un" + userLoginDto.getUserName());
        System.err.println("pw" + userLoginDto.getPassword());
            List<UserLogin> users = userLoginRepository.findByUserName(userLoginDto.getUserName());
            for (UserLogin user : users) {
                System.err.println("pw" + user.getUserName());
                if (user.getUserName().equalsIgnoreCase(userLoginDto.getUserName())) {
                    if (passwordEncoder.matches(userLoginDto.getPassword(), user.getPassword())) {
                        UserLoginDTO isLoginUser = modelMapper.map(user, UserLoginDTO.class);
                        isLoginUser.setPassword("");
                        return new ResponseEntity<>(isLoginUser, HttpStatus.OK);
                    }
                }
            }
            return new ResponseEntity<>(new UserLoginDTO(), HttpStatus.NOT_FOUND);
        }
}
