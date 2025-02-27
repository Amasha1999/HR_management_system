package com.hrManagement.repo;

import com.hrManagement.entity.UserLogin;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserLoginRepository extends MongoRepository<UserLogin, String> {

    @Query("{ 'userName' : ?0 }")
    List<UserLogin>findByUserName(String userName);


}
