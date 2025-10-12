package com.example.be.Controller;

import com.example.be.models.Role;
import com.example.be.models.User;
import com.example.be.Repository.RoleRepository;
import com.example.be.Repository.UserRepository;
import com.example.be.security.JwtUtils;
import lombok.Data;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.*;

import org.springframework.security.core.Authentication;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
@RequestMapping(value = "/api/auth", produces = MediaType.APPLICATION_JSON_VALUE)
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true") // ✅ cho phép React gọi API
public class AuthController {

    private static final Logger logger = LoggerFactory.getLogger(AuthController.class);

    private final AuthenticationManager authManager;
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtils jwtUtils;

    public AuthController(AuthenticationManager authManager, UserRepository userRepository,
            RoleRepository roleRepository, PasswordEncoder passwordEncoder, JwtUtils jwtUtils) {
        this.authManager = authManager;
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtUtils = jwtUtils;
    }

    // ---------------------------- REGISTER ----------------------------
    @PostMapping(value = "/register", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> register(@RequestBody RegisterRequest req) {
        try {
            logger.info("Register request: {}", req);

            if (req.getUsername() == null || req.getEmail() == null || req.getPassword() == null) {
                return ResponseEntity.badRequest().body(Map.of("error", "Thiếu thông tin đăng ký"));
            }

            if (userRepository.existsByUsername(req.getUsername())) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                        .body(Map.of("error", "Username đã tồn tại"));
            }

            if (userRepository.existsByEmail(req.getEmail())) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                        .body(Map.of("error", "Email đã tồn tại"));
            }

            User user = new User();
            user.setUsername(req.getUsername().trim());
            user.setEmail(req.getEmail().trim());
            user.setPassword(passwordEncoder.encode(req.getPassword()));

            Role roleUser = roleRepository.findByName("USER")
                    .orElseThrow(() -> new RuntimeException("Không tìm thấy role USER"));
            user.setRoles(Set.of(roleUser));

            userRepository.save(user);
            logger.info("Đăng ký thành công: {}", user.getUsername());

            return ResponseEntity.ok(Map.of("message", "Đăng ký thành công"));
        } catch (Exception e) {
            logger.error("Lỗi khi đăng ký người dùng: {}", e.getMessage(), e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("error", "Lỗi máy chủ: " + e.getMessage()));
        }
    }

    // ---------------------------- LOGIN ----------------------------
    @PostMapping(value = "/login", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> login(@RequestBody LoginRequest req) {
        logger.info("Login attempt: {}", req.getUsername());
        try {
            String input = req.getUsername().trim();
            User user;
            if (input.contains("@")) {
                user = userRepository.findByEmail(input)
                        .orElseThrow(() -> new UsernameNotFoundException("User not found"));
            } else {
                user = userRepository.findByUsername(input)
                        .orElseThrow(() -> new UsernameNotFoundException("User not found"));
            }

            Authentication auth = authManager.authenticate(
                    new UsernamePasswordAuthenticationToken(user.getUsername(), req.getPassword()));

            UserDetails userDetails = (UserDetails) auth.getPrincipal();
            String token = jwtUtils.generateJwtToken(userDetails);

            logger.info("Login success: {}", userDetails.getUsername());
            return ResponseEntity.ok(Map.of("token", token));
        } catch (Exception e) {
            logger.error("Login error for '{}': {}", req.getUsername(), e.getMessage());
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(Map.of("error", "Sai tài khoản hoặc mật khẩu"));
        }
    }

    // ---------------------------- CURRENT USER ----------------------------
    @GetMapping("/me")
    public ResponseEntity<?> getCurrentUser(Authentication authentication) {
        if (authentication == null || !authentication.isAuthenticated()) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("error", "Unauthorized"));
        }

        String username = authentication.getName();
        User user = userRepository.findByUsername(username).orElse(null);
        if (user == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("error", "User not found"));
        }

        return ResponseEntity.ok(Map.of(
                "username", user.getUsername(),
                "name", user.getUsername(),
                "email", user.getEmail(),
                "roles", authentication.getAuthorities().stream().map(a -> a.getAuthority()).toList()));
    }

    // ---------------------------- DTOs ----------------------------
    @Data
    static class RegisterRequest {
        private String username;
        private String email;
        private String password;
    }

    @Data
    static class LoginRequest {
        private String username;
        private String password;
    }
}
