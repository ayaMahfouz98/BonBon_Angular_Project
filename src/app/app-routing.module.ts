import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsDataComponent } from './Components/AboutUsData/AboutUsData.component';
import { EditeProductComponent } from './Components/EditeProduct/EditeProduct.component';
import { ErrorComponent } from './Components/Error/Error.component';
import { LoginComponent } from './Components/Login/Login.component';
import { NewProductComponent } from './Components/NewProduct/NewProduct.component';
import { ProductDetailsComponent } from './Components/ProductDetails/ProductDetails.component';
import { ProductsComponent } from './Components/Products/Products.component';
import { PromotionsComponent } from './Components/Promotions/Promotions.component';
import { RegisterComponent } from './Components/Register/Register.component';
import { SearchProductComponent } from './Components/SearchProduct/SearchProduct.component';
import { ShoppingCartComponent } from './Components/ShoppingCart/ShoppingCart.component';
import { SearchByCategoryComponent } from './Components/SearchByCategory/SearchByCategory.component';

import { AllCategoriesComponent } from './Components/AllCategories/AllCategories.component';
import { EditCategoryComponent } from './Components/EditCategory/EditCategory.component';
import { NewCategoryComponent } from './Components/NewCategory/NewCategory.component';


import { LayoutComponent } from './Components/layout/layout.component';
import { HomeComponent } from './Components/home/home.component';
import { UserProfileComponent } from './Components/user-profile/user-profile.component';
import { UserOrderComponent } from './Components/UserOrder/UserOrder.component';
import { ForgetPasswordComponent } from './Components/ForgetPassword/ForgetPassword.component';
import { ResetPasswordComponent } from './Components/ResetPassword/ResetPassword.component';
import { AllUsersComponent } from './Components/AllUsers/AllUsers.component';
import { EditUserComponent } from './Components/EditUser/EditUser.component';



const routes: Routes = [
  {path:"",component:LayoutComponent,children:[
    {path: '',redirectTo:'/Home',pathMatch:'full'},
    {path:'Home',component:HomeComponent}

  ]},
  {path:"Cart",component:ShoppingCartComponent},
  {path:"Products",component:ProductsComponent},
  {path:"myOrders",component:UserOrderComponent},
  {path:"Products/:id",component:ProductDetailsComponent},
  {path:"EditeProduct/:id",component:EditeProductComponent},
  {path:"searchProduct/:name",component:SearchProductComponent},
  {path:"searchProduct",component:ProductsComponent},
  {path:"Login",component:LoginComponent},
  {path:"Register",component:RegisterComponent},
  {path:"NewProduct",component:NewProductComponent},
  {path:"DeleteProduct",component:ProductsComponent},
  {path:"SearchByCategory/:id",component:SearchByCategoryComponent},
  {path:"GetUser/:email",component:UserProfileComponent},
  {path:"AllCategories",component:AllCategoriesComponent},
  {path:"EditeCategory/:id",component:EditCategoryComponent},
  {path:"NewCategory",component:NewCategoryComponent},
  {path:"ForgetPassword",component:ForgetPasswordComponent},
  {path:"ResetPassword",component:ResetPasswordComponent},
  {path:"AllUsers",component:AllUsersComponent},
  {path:"EditUser/:email",component:EditUserComponent},
  {path:"**",component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
