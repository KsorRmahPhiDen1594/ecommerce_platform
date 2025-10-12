package com.example.be.Service;

import com.example.be.models.Product_size;
import com.example.be.Repository.ProductSizeRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductSizeService {
    private final ProductSizeRepository repo;

    public ProductSizeService(ProductSizeRepository repo) {
        this.repo = repo;
    }

    public List<Product_size> findAll() {
        return repo.findAll();
    }

    public Product_size save(Product_size size) {
        return repo.save(size);
    }

    public void delete(Long id) {
        repo.deleteById(id);
    }

    public List<Product_size> findByProductId(Long productId) {
        return repo.findByProductId(productId);
    }
}
