package com.careerwise.careerwise.repository;

import com.careerwise.careerwise.model.Enrollment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EnrollmentRepository extends JpaRepository<Enrollment, Long> {
}