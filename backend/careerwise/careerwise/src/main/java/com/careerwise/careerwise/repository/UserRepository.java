package com.careerwise.careerwise.repository;

import com.careerwise.careerwise.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

    User findByEmail(String email);
    
}