import { HttpClient } from '@angular/common/http';

import { ActivatedRoute, Router } from '@angular/router';

import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { ProductsService } from 'src/app/Services/products.service';
import { OrderService } from 'src/app/Services/Order.service';
import { UserService } from 'src/app/Services/User.service';

//import { serialize } from 'v8';

@Component({
  selector: 'app-ProductDetails',
  templateUrl: './ProductDetails.component.html',
  styleUrls: ['./ProductDetails.component.css']
})
export class ProductDetailsComponent implements OnInit {
ProductId:any;
Product:any;
ProductFromApi:any;
quantity:any;
OrderPrice:any;
cartItems:any;
enableAdd = true;
isLoggedIn:any;
@Output() totalPriceOnChange: EventEmitter<number>;

  rating:any;
  ProductItem: any;
  constructor(private userService:UserService,private router:Router,private ActivatedRoute:ActivatedRoute,private service:ProductsService,private orderService :OrderService) {

   this.ProductId= ActivatedRoute.snapshot.params["id"];
   this.isLoggedIn = this.userService.isUserLogged;
   this.totalPriceOnChange = new EventEmitter<number>();
   this.cartItems = orderService.GetShoppingCartItems(localStorage.getItem('cartToken')).subscribe();
  }

  ngOnInit() {
    this.service.GetProductById(this.ProductId).subscribe(

      (data)=>{
        this.Product=data;
        this.quantity = this.Product.quantity;
        this.rating= this.Product.overAllRating;
      },
      (err)=>{console.log(err)}
    );
  }

  AddToCart(){
    this.service.GetProductById(this.Product.id).subscribe(
      (data)=>{
        this.Product = data;
        this.quantity = this.Product.quantity;
        if(this.Product.amount == undefined){
          this.Product.amount=0;
          this.enableAdd = true;
        }
        if(this.Product.amount < this.quantity){
          this.Product.amount++;
          this.OrderPrice = this.Product.price;
          this.totalPriceOnChange.emit(this.OrderPrice);
          this.orderService.AddToShoppingCart(this.Product.id,localStorage.getItem('cartToken')).subscribe();
        }
        else{
            this.enableAdd = false;
        }
      }

    );    
}
    
      Delete(id:any){
        this.service.DeleteProduct(id).subscribe();
       this.router.navigate(['/Products']);
      //window.location.reload();

      }


}
