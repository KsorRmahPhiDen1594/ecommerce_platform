package com.example.be.Service;

import com.example.be.models.Product_color;
import com.example.be.Repository.ProductColorRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductColorService {
    private final ProductColorRepository repo;

    public ProductColorService(ProductColorRepository repo) {
        this.repo = repo;
    }

    public List<Product_color> findAll() {
        return repo.findAll();
    }

    public Product_color save(Product_color color) {
        return repo.save(color);
    }

    public void delete(Long id) {
        repo.deleteById(id);
    }

    public List<Product_color> findByProductId(Long productId) {
        return repo.findByProductId(productId);
    }
}
