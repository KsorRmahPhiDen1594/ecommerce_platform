package com.example.be.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name; // "USER" hoặc "ADMIN"

    @ManyToMany(mappedBy = "roles")
    @JsonIgnore // ⚡️ để không bị vòng lặp khi trả JSON user -> roles -> users
    private Set<User> users = new HashSet<>();

    public Role(String name) {
        this.name = name;
    }
}
