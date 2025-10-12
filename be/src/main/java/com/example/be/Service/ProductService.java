package com.example.be.Service;

import com.example.be.models.Product;
import com.example.be.Repository.ProductRepository;
import org.springframework.stereotype.Service;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    private final ProductRepository repo;
    private static final Logger logger = LoggerFactory.getLogger(ProductService.class); // ✅ Sửa: Dùng
                                                                                        // ProductService.class

    @Autowired
    public ProductService(ProductRepository repo) {
        this.repo = repo;
    }

    public List<Product> getAllProducts() {
        List<Product> products = repo.findAll();
        logger.info("Retrieved {} products from DB", products.size()); // ✅ Log size để debug
        return products;
    }

    public Product addProduct(Product product) {
        if (product == null) {
            logger.warn("Attempt to add null product");
            throw new IllegalArgumentException("Product cannot be null");
        }
        logger.info("Adding product: {}", product.getName());
        return repo.save(product);
    }

    public Optional<Product> updateProduct(Long id, Product product) {
        if (product == null || !repo.existsById(id)) {
            logger.warn("Update failed: Product null or ID {} not found", id);
            return Optional.empty(); // ✅ Trả Optional để controller handle 404
        }
        product.setId(id);
        logger.info("Updating product ID: {}", id);
        return Optional.of(repo.save(product));
    }

    public boolean deleteProduct(Long id) { // ✅ Trả boolean thay void để check success
        if (!repo.existsById(id)) {
            logger.warn("Delete failed: ID {} not found", id);
            return false;
        }
        repo.deleteById(id);
        logger.info("Deleted product ID: {}", id);
        return true;
    }

    public List<Product> getProductsByCategoryName(String categoryName) {
        if (categoryName == null || categoryName.trim().isEmpty()) {
            logger.warn("Invalid category name: {}", categoryName);
            return List.of(); // Empty list nếu invalid
        }
        logger.info("Querying products by category: '{}'", categoryName);
        List<Product> products = repo.findByCategory_NameIgnoreCase(categoryName); // Giả sử method tồn tại
        logger.info("Found {} products for category '{}'", products.size(), categoryName);
        return products;
    }

    public List<Product> searchProducts(String keyword) {
        if (keyword == null || keyword.trim().isEmpty()) {
            logger.warn("Invalid search keyword: {}", keyword);
            return List.of();
        }
        logger.info("Searching products with keyword: '{}'", keyword);
        List<Product> products = repo.findByNameContainingIgnoreCase(keyword); // Giả sử method tồn tại
        logger.info("Found {} products for search '{}'", products.size(), keyword);
        return products;
    }

    // ✅ Thêm method getById để optimize (nếu chưa có)
    public Optional<Product> getProductById(Long id) {
        logger.info("Fetching product by ID: {}", id);
        return repo.findById(id);
    }
}