package com.youtube.jwt.repository;

import com.youtube.jwt.constant.CategoryPage;
import com.youtube.jwt.criteria.CategoryCriteriaSearch;
import com.youtube.jwt.entity.*;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.domain.Page;

import java.util.List;
//@SpringBootApplication(scanBasePackages = "com.youtube.jwt.service")
public interface CategoryService {

    public Page<Category> findAll(CategoryPage categoryPage , CategoryCriteriaSearch categoryCriteriaSearch);

    public List<Category> listAll();

//    public Category findById(Long categoryId);

    public Category update(Category category , Long categoryId);

    public Category create(Category category);

    public void delete(Long categoryId);
}
