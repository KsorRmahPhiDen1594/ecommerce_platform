package com.example.be.Controller;

import com.example.be.models.Product_color;
import com.example.be.Service.ProductColorService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/product-colors")
@CrossOrigin(origins = "*")
public class ProductColorController {
    private final ProductColorService service;

    public ProductColorController(ProductColorService service) {
        this.service = service;
    }

    @GetMapping
    public List<Product_color> getAll() {
        return service.findAll();
    }

    @GetMapping("/product/{productId}")
    public List<Product_color> getByProduct(@PathVariable Long productId) {
        return service.findByProductId(productId);
    }

    @PostMapping
    public Product_color create(@RequestBody Product_color color) {
        return service.save(color);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }
}
