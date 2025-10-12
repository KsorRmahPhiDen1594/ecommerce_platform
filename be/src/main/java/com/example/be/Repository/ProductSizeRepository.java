package com.example.be.Repository;

import com.example.be.models.Product_size;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductSizeRepository extends JpaRepository<Product_size, Long> {
    List<Product_size> findByProductId(Long productId);
}
