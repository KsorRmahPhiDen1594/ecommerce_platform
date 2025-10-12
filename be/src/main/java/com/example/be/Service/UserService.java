package com.example.be.Service;

import com.example.be.models.Role;
import com.example.be.models.User;
import com.example.be.Repository.RoleRepository;
import com.example.be.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    // Đăng ký user mới
    public User registerUser(String username, String email, String password, String roleName) {
        if (userRepository.existsByUsername(username)) {
            throw new RuntimeException("Username đã tồn tại!");
        }
        if (userRepository.existsByEmail(email)) {
            throw new RuntimeException("Email đã tồn tại!");
        }

        User user = new User();
        user.setUsername(username);
        user.setEmail(email);
        user.setPassword(passwordEncoder.encode(password));

        // Gán role
        Role role = roleRepository.findByName(roleName)
                .orElseThrow(() -> new RuntimeException("Role không tồn tại"));
        Set<Role> roles = new HashSet<>();
        roles.add(role);
        user.setRoles(roles);

        return userRepository.save(user);
    }

    // Tìm theo username
    public Optional<User> findByUsername(String username) {
        return userRepository.findByUsername(username);
    }
}
