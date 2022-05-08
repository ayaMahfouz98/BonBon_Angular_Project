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
import { SearchByCategoryComponent } from './Components/SearchByCategory/SearchByCategory.component';



const routes: Routes = [
  {path:"",component:ProductsComponent,children:[
    {path:"AboutUs",component:AboutUsDataComponent},
    {path:"Promotions",component:PromotionsComponent}

  ]},
  {path:"Products",component:ProductsComponent},
  {path:"Products/:id",component:ProductDetailsComponent},
  {path:"EditeProduct/:id",component:EditeProductComponent},
  {path:"searchProduct/:name",component:SearchProductComponent},
  {path:"searchProduct",component:ProductsComponent},
  {path:"Login",component:LoginComponent},
  {path:"Register",component:RegisterComponent},
  {path:"NewProduct",component:NewProductComponent},
  {path:"DeleteProduct",component:ProductsComponent},
  {path:"SearchByCategory/:id",component:SearchByCategoryComponent},
  {path:"**",component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
