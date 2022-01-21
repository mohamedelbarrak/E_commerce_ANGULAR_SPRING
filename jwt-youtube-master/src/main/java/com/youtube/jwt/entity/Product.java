package com.youtube.jwt.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

import com.youtube.jwt.enumType.MyBrand;

import java.util.Arrays;
import java.util.List;

@Data
@ToString
@Entity
public class Product {

    @Id
    @GeneratedValue
    private Long productId;

    private String productName;

    @Enumerated(EnumType.STRING)
    private MyBrand brand;

    private String model;

    private float price;

    private String description;

    @Column(name = "image", length = 1000000)
    private byte[] image;

    @ManyToOne(cascade = {CascadeType.DETACH , CascadeType.PERSIST
            , CascadeType.MERGE , CascadeType.REFRESH})
    @JoinColumn(name = "category_id")
    private Category category;

    @ManyToOne(cascade = {
            CascadeType.PERSIST , CascadeType.MERGE,
            CascadeType.DETACH , CascadeType.REFRESH
    })
    @JoinColumn(name = "promotion_id")
    private Promotion promotion;




}
