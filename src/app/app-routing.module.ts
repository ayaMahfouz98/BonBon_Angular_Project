import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './Components/Error/Error.component';
import { LoginComponent } from './Components/Login/Login.component';
import { ProductDetailsComponent } from './Components/ProductDetails/ProductDetails.component';
import { ProductsComponent } from './Components/Products/Products.component';
import { RegisterComponent } from './Components/Register/Register.component';

const routes: Routes = [
  {path:"",component:ProductsComponent},
  {path:"Products",component:ProductsComponent},
  {path:"Products/:id",component:ProductDetailsComponent},
  {path:"Login",component:LoginComponent},
  {path:"Register",component:RegisterComponent},
  {path:"NewProduct",component:ProductsComponent},
  {path:"DeleteProduct",component:ProductsComponent},
  {path:"**",component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
