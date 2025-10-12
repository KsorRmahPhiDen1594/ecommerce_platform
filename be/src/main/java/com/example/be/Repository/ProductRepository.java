package com.example.be.Repository;

import com.example.be.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {
    // filter theo category id
    List<Product> findByCategoryId(Long categoryId);

    // filter theo location
    List<Product> findByLocation(String location);

    List<Product> findByCategory_NameIgnoreCase(String categoryName);

    List<Product> findByNameContainingIgnoreCase(String name);

}
