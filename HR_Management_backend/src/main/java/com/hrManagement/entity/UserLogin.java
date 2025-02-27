package com.hrManagement.entity;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
@Getter
@Setter
@Document(collection = "UserLogin")
public class UserLogin implements Serializable {
    @Id
    private String id;
    private String userName;
    private String password;
    private Integer userType;
    private Integer active;
}