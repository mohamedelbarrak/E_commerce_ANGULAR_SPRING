// import { Component, OnInit } from '@angular/core';
// import {ActivatedRoute, Router} from '@angular/router';
// import {ProductService} from '../../shared/product.service';
// import {Product} from '../../modules/product';
// import {MyBrand} from '../../enums/myBrand';
// import {MyGeneration} from '../../enums/myGeneration';

// @Component({
//   selector: 'app-product-detail',
//   templateUrl: './product-detail.component.html',
//   styleUrls: ['./product-detail.component.css']
// })
// export class ProductDetailComponent implements OnInit {
//   id!: number;
//   categoryId!: number;
//   promotionId!: number;
//   productName!: string;
//   brand!: MyBrand;
//   model!: string;
//   cpu!: string;
//   price!: number;
//   releaseDate!: Date;
//   ram!: string;
//   description!: string;
//   image!: Blob;
//   generation!: MyGeneration;
//   category!: string;
//   promotion!: string;

//   constructor(private router: Router , private route: ActivatedRoute , private productService: ProductService) { }

//   ngOnInit(): void {
//     this.id = this.route.snapshot.params['id'];
//     this.categoryId = this.route.snapshot.params['categoryId'];
//     this.promotionId = this.route.snapshot.params['promotionId'];
//     this.productService.getProduct(this.id, this.categoryId, this.promotionId).subscribe(
//       (productData: Product) => {
//         this.productName = productData.productName;
//         this.brand = productData.brand;
//         this.model = productData.model;
//         // this.cpu = productData.cpu;
//         this.price = productData.price;
//         // this.releaseDate = productData.releaseDate;
//         // this.ram = productData.ram;
//         this.description = productData.description;
//         this.image = productData.image;
//         this.category = productData.category.categoryName;
//         this.promotion = productData.promotion.promotionName;
//       }
//     );
//   }

//   onDeleteProduct(id: number) {
//     this.productService.deleteProducts(id)
//       .subscribe((product) => {
//         if(confirm("are you sure that you want to delete this product with " + id)) {
//           this.onRedirectToProductList();
//         }
//       });
//   }

//   onUpdateProduct(id: number , categoryId: number , promotionId: number) {
//     this.router.navigate(['admin/updateProduct'  , categoryId , promotionId , id]);
//   }

//   onRedirectToProductList() {
//     this.router.navigate(['admin/listProducts']);
//   }

// }



import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../../shared/product.service';
import { UserService } from 'src/app/_services/user.service';
import {Product} from '../../modules/product';
import {MyBrand} from '../../enums/myBrand';
import {MyGeneration} from '../../enums/myGeneration';
import { UserAuthService } from 'src/app/_services/user-auth.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  id!: number;
  categoryId!: number;
  promotionId!: number;
  productName!: string;
  brand!: MyBrand;
  model!: string;
  cpu!: string;
  price!: number;
  releaseDate!: Date;
  ram!: string;
  description!: string;
  image!: Blob;
  generation!: MyGeneration;
  category!: string;
  promotion!: string;

  constructor(private router: Router , private route: ActivatedRoute , private productService: ProductService, private userAuthService: UserAuthService, public  userService: UserService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.categoryId = this.route.snapshot.params['categoryId'];
    this.promotionId = this.route.snapshot.params['promotionId'];
    this.productService.getProduct(this.id, this.categoryId).subscribe(
      (productData: Product) => {
        this.productName = productData.productName;
        this.brand = productData.brand;
        this.model = productData.model;
        // this.cpu = productData.cpu;
        this.price = productData.price;
        // this.releaseDate = productData.releaseDate;
        // this.ram = productData.ram;
        this.description = productData.description;
        this.image = productData.image;
        this.category = productData.category.categoryName;
      }
    );
  }

  onDeleteProduct(id: number) {
    this.productService.deleteProducts(id)
      .subscribe((product) => {
        if(confirm("are you sure that you want to delete this product with " + id)) {
          this.onRedirectToProductList();
        }
      });
  }

  onUpdateProduct(id: number , categoryId: number , promotionId: number) {
    this.router.navigate(['pro/updateProduct'  , categoryId , id]);
  }

  onUpdateProduct2(id: number , categoryId: number ) {
    this.router.navigate(['pro/updateProduct'  , categoryId , id]);
  }

  addToCart (id: number , categoryId: number ) {
    this.router.navigate(['pro/add'  , categoryId , id]);
}

  onRedirectToProductList() {
    this.router.navigate(['listProducts']);
  }

  public roleMatch(allowedRoles: any): boolean {
    let isMatch = false;
    const userRoles: any = this.userAuthService.getRoles();

    if (userRoles != null && userRoles) {
      for (let i = 0; i < userRoles.length; i++) {
        for (let j = 0; j < allowedRoles.length; j++) {
          if (userRoles[i].roleName === allowedRoles[j]) {
            isMatch = true;
            return isMatch;
          } else {
            return isMatch;
          }
        }
      }
    }
    return isMatch;
  }
}
