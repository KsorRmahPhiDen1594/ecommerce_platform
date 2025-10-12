package com.example.be.Controller;

import com.example.be.models.Product_size;
import com.example.be.Service.ProductSizeService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/product-sizes")
@CrossOrigin(origins = "*")
public class ProductSizeController {
    private final ProductSizeService service;

    public ProductSizeController(ProductSizeService service) {
        this.service = service;
    }

    @GetMapping
    public List<Product_size> getAll() {
        return service.findAll();
    }

    @GetMapping("/product/{productId}")
    public List<Product_size> getByProduct(@PathVariable Long productId) {
        return service.findByProductId(productId);
    }

    @PostMapping
    public Product_size create(@RequestBody Product_size size) {
        return service.save(size);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }
}
