import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http"
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
import { ShoppingCartComponent } from './Components/ShoppingCart/ShoppingCart.component';
import { ShoppingCartitemComponent } from './Components/ShoppingCartitem/ShoppingCartitem.component';
import { UserOrderComponent } from './Components/UserOrder/UserOrder.component';
import { SearchByCategoryComponent } from './Components/SearchByCategory/SearchByCategory.component';
import { AllCategoriesComponent } from './Components/AllCategories/AllCategories.component';
import { EditCategoryComponent } from './Components/EditCategory/EditCategory.component';
import { NewCategoryComponent } from './Components/NewCategory/NewCategory.component';
import { HomeSliderComponent } from './Components/home-slider/home-slider.component';
import { LayoutComponent } from './Components/layout/layout.component';
import { HomeComponent } from './Components/home/home.component';
import { OrderDetailsComponent } from './Components/OrderDetails/OrderDetails.component';
import { UserProfileComponent } from './Components/user-profile/user-profile.component';
import { ForgetPasswordComponent } from './Components/ForgetPassword/ForgetPassword.component';
import { ResetPasswordComponent } from './Components/ResetPassword/ResetPassword.component';
import { AllUsersComponent } from './Components/AllUsers/AllUsers.component';
import { EditUserComponent } from './Components/EditUser/EditUser.component';
import { EditProfileComponent } from './Components/edit-profile/edit-profile.component'; // <-- import the module
//pagination
import {NgxPaginationModule} from 'ngx-pagination';
import { SocialLoginModule, SocialAuthServiceConfig ,
  GoogleLoginProvider, FacebookLoginProvider
} from '@abacritt/angularx-social-login';
import { EditProfileComponent } from './Components/edit-profile/edit-profile.component';
import { AllOrdersComponent } from './components/all-orders/all-orders.component';



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
      SearchByCategoryComponent,
      AllCategoriesComponent,
      EditCategoryComponent,
      NewCategoryComponent,
      ShoppingCartComponent,
      ShoppingCartitemComponent,
      UserOrderComponent,
      SearchByCategoryComponent,
      HomeSliderComponent,
      LayoutComponent,
      HomeComponent,
      UserProfileComponent,
      EditProfileComponent,
      ForgetPasswordComponent,
      ResetPasswordComponent,
      AllUsersComponent,
      EditUserComponent,
      OrderDetailsComponent,
      AllOrdersComponent,


   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    CommonModule,
    NgbModule,
    NgxPaginationModule,
    SocialLoginModule
  ],

  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '275763442049-pkbrngs8ckmdj4absm6sedfa321bf8p3.apps.googleusercontent.com'
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('3181192858760452')
          }
        ],
        onError: (err:any) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
