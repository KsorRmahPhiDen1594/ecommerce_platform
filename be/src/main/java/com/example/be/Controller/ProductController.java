package com.example.be.Controller;

import com.example.be.models.Product;
import com.example.be.Service.ProductService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:5173") // CORS cho React dev
public class ProductController {

    private static final Logger logger = LoggerFactory.getLogger(ProductController.class);
    private final ProductService productService;

    // Map slug → full category name (sửa encoding tiếng Việt đúng dấu)
    private final Map<String, String> slugToCategoryName = new HashMap<>() {
        {
            put("laptop", "Laptop");
            put("dien-thoai", "Điện thoại");
            put("thoi-trang-nam", "Thời trang nam"); // ✅ Sửa dấu đúng
            put("thoi-trang-nu", "Thời trang nữ"); // ✅ Sửa dấu đúng
            put("do-gia-dung", "Đồ gia dụng"); // ✅ Sửa dấu đúng
            put("suc-khoe-sac-dep", "Sức khỏe & Sắc đẹp"); // ✅ Sửa dấu đúng
            // Thêm categories khác nếu cần, ví dụ: put("me-be", "Mẹ & Bé");
        }
    };

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    // ✅ GET /api/products?category=slug&search=keyword
    @GetMapping
    public ResponseEntity<List<Product>> getProducts(
            @RequestParam(required = false) String category,
            @RequestParam(required = false) String search) {
        logger.info("Received params: category='{}', search='{}'", category, search);
        List<Product> products;

        if (category != null && !category.isEmpty()) {
            // Convert slug → full name từ map
            String fullCategoryName = slugToCategoryName.getOrDefault(category.toLowerCase(), category);
            logger.info("Mapped slug '{}' to full category '{}'", category, fullCategoryName);
            products = productService.getProductsByCategoryName(fullCategoryName);
            logger.info("Found {} products for category '{}'", products.size(), fullCategoryName);
        } else if (search != null && !search.isEmpty()) {
            products = productService.searchProducts(search);
            logger.info("Found {} products for search '{}'", products.size(), search);
        } else {
            products = productService.getAllProducts();
            logger.info("Found {} products (all)", products.size());
        }

        return ResponseEntity.ok(products);
    }

    // ✅ GET /api/products/{id} – Optimize với findById
    @GetMapping("/{id}")
    public ResponseEntity<Product> getProduct(@PathVariable Long id) {
        logger.info("Fetching product by ID: {}", id);
        Optional<Product> productOpt = productService.getProductById(id); // Giả sử Service có method này (dùng
                                                                          // repo.findById)
        if (productOpt.isPresent()) {
            return ResponseEntity.ok(productOpt.get());
        } else {
            logger.warn("Product not found with ID: {}", id);
            return ResponseEntity.notFound().build(); // 404 nếu không tồn tại
        }
    }

    // ✅ POST /api/products – Tạo mới
    @PostMapping
    public ResponseEntity<Product> addProduct(@RequestBody Product product) {
        logger.info("Adding new product: {}", product.getName());
        Product saved = productService.addProduct(product);
        return ResponseEntity.ok(saved);
    }

    // ✅ PUT /api/products/{id} – Update
    @PutMapping("/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable Long id, @RequestBody Product product) {
        logger.info("Updating product ID: {}", id);
        Optional<Product> updated = productService.updateProduct(id, product);
        if (updated.isPresent()) {
            return ResponseEntity.ok(updated.get());
        } else {
            logger.warn("Product not found for update: {}", id);
            return ResponseEntity.notFound().build();
        }
    }

    // ✅ DELETE /api/products/{id}
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable Long id) {
        logger.info("Deleting product ID: {}", id);
        if (productService.deleteProduct(id)) { // Giả sử Service trả boolean success
            return ResponseEntity.noContent().build(); // 204 No Content
        } else {
            logger.warn("Product not found for delete: {}", id);
            return ResponseEntity.notFound().build();
        }
    }
}