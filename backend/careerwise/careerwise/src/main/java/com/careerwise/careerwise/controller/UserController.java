package com.careerwise.careerwise.controller;

import com.careerwise.careerwise.model.User;
import com.careerwise.careerwise.repository.EnrollmentRepository;
import com.careerwise.careerwise.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "*")
public class UserController {

    private final UserRepository userRepository;
    private final EnrollmentRepository enrollmentRepository;

    public UserController(UserRepository userRepository,
                          EnrollmentRepository enrollmentRepository) {
        this.userRepository = userRepository;
        this.enrollmentRepository = enrollmentRepository;
    }

    // ==========================
    // User Registration
    // ==========================
    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User user) {

        if (userRepository.findByEmail(user.getEmail()) != null) {
            return ResponseEntity.badRequest().body("Email already registered");
        }

        user.setRole("USER");
        return ResponseEntity.ok(userRepository.save(user));
    }

    // ==========================
    // Admin Registration
    // ==========================
    @PostMapping("/admin/register")
    public ResponseEntity<?> registerAdmin(@RequestBody User admin) {

        if (userRepository.findByEmail(admin.getEmail()) != null) {
            return ResponseEntity.badRequest().body("Email already registered");
        }

        admin.setRole("ADMIN");
        return ResponseEntity.ok(userRepository.save(admin));
    }

    // ==========================
    // User Login
    // ==========================
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User loginUser) {

        User user = userRepository.findByEmail(loginUser.getEmail());

        if (user != null &&
                user.getPassword().equals(loginUser.getPassword()) &&
                "USER".equalsIgnoreCase(user.getRole())) {

            return ResponseEntity.ok(user);
        }

        return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                .body("Invalid user email or password");
    }

    // ==========================
    // Admin Login
    // ==========================
    @PostMapping("/admin/login")
    public ResponseEntity<?> adminLogin(@RequestBody User loginUser) {

        User admin = userRepository.findByEmail(loginUser.getEmail());

        if (admin == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body("Admin email not found");
        }

        if (!admin.getPassword().equals(loginUser.getPassword())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body("Wrong admin password");
        }

        if (!"ADMIN".equalsIgnoreCase(admin.getRole())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body("This account is not an admin");
        }

        return ResponseEntity.ok(admin);
    }

    // ==========================
    // Get All Users
    // ==========================
    @GetMapping("/admin/all-users")
    public ResponseEntity<?> getAllUsers() {
        return ResponseEntity.ok(userRepository.findAll());
    }

    // ==========================
    // Get User By ID
    // ==========================
    @GetMapping("/{id}")
    public ResponseEntity<?> getUserById(@PathVariable("id") long id) {

        Optional<User> user = userRepository.findById(id);

        if (user.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("User not found");
        }

        return ResponseEntity.ok(user.get());
    }

    // ==========================
    // Update User
    // ==========================
    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateProfile(
            @PathVariable("id") long id,
            @RequestBody User updatedUser) {

        Optional<User> optionalUser = userRepository.findById(id);

        if (optionalUser.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("User not found");
        }

        User existingUser = optionalUser.get();

        existingUser.setName(updatedUser.getName());
        existingUser.setEmail(updatedUser.getEmail());
        existingUser.setCareerInterest(updatedUser.getCareerInterest());

        return ResponseEntity.ok(userRepository.save(existingUser));
    }

    // ==========================
    // Get All Enrollments
    // ==========================
    @GetMapping("/admin/enrollments")
    public ResponseEntity<?> getAllEnrollments() {
        return ResponseEntity.ok(enrollmentRepository.findAll());
    }

}