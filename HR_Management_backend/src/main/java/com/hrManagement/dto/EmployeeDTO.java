package com.hrManagement.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class EmployeeDTO {
    private String id;
    private String name;
    private String email;
    private String phone;
    private String address;
    private String jobTitle;
    private String departmentId;
    private Integer status;
}

