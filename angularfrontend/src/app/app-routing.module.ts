import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { CreateCategoryComponent } from './categories/create-category/create-category.component';
import { DetailCategoriesComponent } from './categories/detail-categories/detail-categories.component';
import { ListCategoriesComponent } from './categories/list-categories/list-categories.component';
import { ListCustomersComponent } from './customers/list-customers/list-customers.component';
import { DashbordComponent } from './dashbord/dashboard/dashbord.component';
import { ListOrdersComponent } from './orders/list-orders/list-orders.component';
import { CreateProductComponent } from './products/create-product/create-product.component';
import { ListProductsComponent } from './products/list-products/list-products.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductsComponent } from './products/products.component';
import { ListPromotionsComponent } from './promotions/list-promotions/list-promotions.component';


import { AdminComponent } from './admin/admin.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './_auth/auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard], data: { roles: ['Admin'] } },
  { path: 'user', component: UserComponent, canActivate: [AuthGuard], data: { roles: ['User'] } },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forbidden', component: ForbiddenComponent },


  {path: '' , redirectTo: '/dashbord' , pathMatch: 'full'},
  {path: 'dashbord' , component: DashbordComponent},
  {path: 'pro' , component: CategoriesComponent , children: [
    {path: 'listCategories' , component: ListCategoriesComponent},
    {path: 'createCategory' , component: CreateCategoryComponent},
    {path: 'detailCategory/:id' , component: DetailCategoriesComponent},
    {path: 'updateCategory/:id' , component: CreateCategoryComponent}
  ]},
  {path: 'admin' , component: CategoriesComponent , children: [
    {path: 'listCategories' , component: ListCategoriesComponent},
    {path: 'createCategory' , component: CreateCategoryComponent},
    {path: 'detailCategory/:id' , component: DetailCategoriesComponent},
    {path: 'detailCategory/:categoryId/listProducts' , component: ListProductsComponent},
    {path: 'updateCategory/:id' , component: CreateCategoryComponent}
  ]},
  {path: 'pro' , component: ProductsComponent , children: [
    {path: 'listProducts' , component: ListProductsComponent},
    {path: 'createProduct' , component: CreateProductComponent},
    {path: 'detailProduct/:categoryId/:id' , component: ProductDetailComponent},
    {path: 'updateProduct/:categoryId/:id' , component: CreateProductComponent}
  ]},
  {path: 'admin' , component: ProductsComponent , children: [
    {path: 'listProducts' , component: ListProductsComponent},
    {path: 'createProduct' , component: CreateProductComponent},
    {path: 'detailProduct/:categoryId/:id' , component: ProductDetailComponent},
    {path: 'updateProduct/:categoryId/:id' , component: CreateProductComponent}
  ]},
  {path: 'listProducts' , component: ListProductsComponent},
  {path: 'listCustomers' , component: ListCustomersComponent},
  {path: 'listPromotions' , component: ListPromotionsComponent},
  {path: 'listOrders' , component: ListOrdersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
