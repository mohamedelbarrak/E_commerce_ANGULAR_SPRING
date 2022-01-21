package com.youtube.jwt.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
public class Category {

    @Id
    @GeneratedValue
    private Long categoryId;

    private String categoryName;

    @JsonIgnore
    @OneToMany(mappedBy = "category" , cascade = {CascadeType.DETACH , CascadeType.MERGE , CascadeType.PERSIST
            , CascadeType.REFRESH})
    private List<Product> products;


}
