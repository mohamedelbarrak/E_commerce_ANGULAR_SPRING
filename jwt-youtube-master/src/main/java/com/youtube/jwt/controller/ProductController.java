package com.youtube.jwt.controller;


import com.youtube.jwt.constant.ProductPaging;
import com.youtube.jwt.criteria.ProductCriteriaSearch;
import com.youtube.jwt.entity.*;
import com.youtube.jwt.service.ProductService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/product")
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping("/allProducts")
    public ResponseEntity<Page<Product>> findAll(ProductPaging productPaging , ProductCriteriaSearch productCriteriaSearch) {
        return new ResponseEntity<>(productService.findAll(productPaging , productCriteriaSearch) , HttpStatus.OK);
    }
/////////
    @GetMapping("/{categoryId}/listProducts")
    public ResponseEntity<List<Product>> listProduct(@PathVariable Long categoryId) {
        return new ResponseEntity<>(productService.listAll2(categoryId) , HttpStatus.OK);
    }
/////////
    
    @GetMapping("/products")
    public ResponseEntity<List<Product>> products() {
        return new ResponseEntity<>(productService.listProducts() , HttpStatus.OK);
    }

    @GetMapping("/{categoryId}/{promotionId}/listProducts")
    public ResponseEntity<List<Product>> listProduct(@PathVariable Long categoryId , @PathVariable Long promotionId) {
        return new ResponseEntity<>(productService.listAll(categoryId , promotionId) , HttpStatus.OK);
    }

///{promotionId} WRA CATE   @PathVariable Long promotionId,
    @PostMapping("/{categoryId}/save")
    public ResponseEntity<Product> saveProduct(@ModelAttribute Product product,
                                               @PathVariable Long categoryId,
                                               @RequestParam MultipartFile file) throws IOException {
    	 System.out.println("#######################product: "+ product.toString());
    	 System.out.println("#######################categoryId: "+ categoryId);
    	// System.out.println("#######################promotionId: ");
    	 System.out.println("#######################file: "+ file);
    	/* Product createProduct = productService.save(categoryId, promotionId ,  product , file);*/
    	 Product createProduct = productService.save(categoryId ,  product , file);

        try {
            return ResponseEntity.status(HttpStatus.CREATED).body(createProduct);
        }
        catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

    }

///{promotionId}
    @GetMapping("{categoryId}/product/{id}")
    public ResponseEntity<Product> getProduct(@PathVariable Long id,
                          @PathVariable Long categoryId,
                           @PathVariable Long promotionId) {
        return new ResponseEntity<>(productService.get(id , categoryId , promotionId) , HttpStatus.OK);
    }
    
    
    @GetMapping("{categoryId}/{id}")
    public ResponseEntity<Product> getProduct2(@PathVariable Long id,
                          @PathVariable Long categoryId) {
        return new ResponseEntity<>(productService.get2(id , categoryId) , HttpStatus.OK);
    }

    @PutMapping("{categoryId}/{promotionId}/update/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable Long id ,
                                                 @PathVariable Long categoryId ,
                                                 @PathVariable Long promotionId,
                                                 @RequestParam MultipartFile file
            , @ModelAttribute Product product) throws IOException {

        Product updateProduct = productService.update(categoryId , promotionId , id , product , file);
        try {
            return ResponseEntity.status(HttpStatus.CREATED).body(updateProduct);
        }
        catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

    }

    
    @PutMapping("{categoryId}/update/{id}")
    public ResponseEntity<Product> updateProduct1(@PathVariable Long id ,
                                                 @PathVariable Long categoryId ,
                                                 @RequestParam MultipartFile file
            , @ModelAttribute Product product) throws IOException {

        Product updateProduct = productService.update2(categoryId , id , product , file);
        try {
            return ResponseEntity.status(HttpStatus.CREATED).body(updateProduct);
        }
        catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

    }

    
    
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteProduct(@PathVariable Long id) {
        productService.delete(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
