package com.hrManagement.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Document(collection = "Employee")
public class Employee {

    @Id
    private String id;
    private String name;
    private String email;
    private String phone;
    private String address;
    private String jobTitle;
    private String departmentId;
    private Integer status;

}
