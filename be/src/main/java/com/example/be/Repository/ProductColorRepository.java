package com.example.be.Repository;

import com.example.be.models.Product_color;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductColorRepository extends JpaRepository<Product_color, Long> {
    List<Product_color> findByProductId(Long productId);
}
