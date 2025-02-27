package com.hrManagement.dto;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
@Getter
@Setter
public class UserLoginDTO {
    private String id;
    private String userName;
    private String password;
    private Integer userType;
    private Integer active;
}