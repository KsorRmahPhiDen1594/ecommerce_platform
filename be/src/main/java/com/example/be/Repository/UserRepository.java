package com.example.be.Repository;

import com.example.be.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);

    Optional<User> findByEmail(String email); // ← Đảm bảo có method này (Spring Data tự generate)

    Boolean existsByUsername(String username);

    Boolean existsByEmail(String email);
}