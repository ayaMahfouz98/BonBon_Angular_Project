import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/Services/products.service';
import { OrderService } from 'src/app/Services/Order.service';

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
@Output() totalPriceOnChange: EventEmitter<number>;

rating:any;
  ProductItem: any;
  constructor(private ActivatedRoute:ActivatedRoute,private service:ProductsService,private orderService :OrderService) {
   this.ProductId= ActivatedRoute.snapshot.params["id"];
   
   this.totalPriceOnChange = new EventEmitter<number>();
   this.cartItems = orderService.GetShoppingCartItems(localStorage.getItem('cartToken')).subscribe();
  }

  ngOnInit() {
    /*
    Array(this.cartItems).forEach( (element: any)=>{
      if(element.id == this.ProductId)
      this.ProductItem = element;
     });
     */
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
    

}