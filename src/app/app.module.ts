import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http"
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/Header/Header.component';
import { FooterComponent } from './Components/Footer/Footer.component';
import { ProductsComponent } from './Components/Products/Products.component';
import { ProductItemComponent } from './Components/ProductItem/ProductItem.component';
import { ProductDetailsComponent } from './Components/ProductDetails/ProductDetails.component';
import { RegisterComponent } from './Components/Register/Register.component';
import { LoginComponent } from './Components/Login/Login.component';
import { NewProductComponent } from './Components/NewProduct/NewProduct.component';
import { EditeProductComponent } from './Components/EditeProduct/EditeProduct.component';
import { ErrorComponent } from './Components/Error/Error.component';
import { PromotionsComponent } from './Components/Promotions/Promotions.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { SearchProductComponent } from './Components/SearchProduct/SearchProduct.component';
import { AboutUsDataComponent } from './Components/AboutUsData/AboutUsData.component';
import { SidebarComponent } from './Components/Sidebar/Sidebar.component';
import { SearchByCategoryComponent } from './Components/SearchByCategory/SearchByCategory.component';

@NgModule({
  declarations: [
      AppComponent,
      HeaderComponent,
      FooterComponent,
      ProductsComponent,
      ProductItemComponent,
      ProductDetailsComponent,
      RegisterComponent,
      LoginComponent,
      NewProductComponent,
      EditeProductComponent,
      ErrorComponent,
      PromotionsComponent,
      SearchProductComponent,
      AboutUsDataComponent,
      SidebarComponent,
      SearchByCategoryComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    CommonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
