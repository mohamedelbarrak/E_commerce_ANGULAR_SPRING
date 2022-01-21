package com.youtube.jwt.repository;

import com.youtube.jwt.entity.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    Optional<Product> findByProductName(String productName);

    List<Product> findAllByCategoryAndPromotion(Category category , Promotion promotion);
    
    List<Product> findAllByCategory(Category category);
    
    Optional<Product> findByProductIdAndCategoryCategoryIdAndPromotionPromotionId(Long id , Long categoryId , Long promotionId);

    Optional<Product> findByProductIdAndCategoryCategoryId(Long id , Long categoryId);

    
}
