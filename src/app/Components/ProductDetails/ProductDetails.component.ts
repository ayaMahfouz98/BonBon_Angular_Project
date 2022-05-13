import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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
  constructor(private ActivatedRoute:ActivatedRoute,private service:ProductsService,private orderService :OrderService) {
   this.ProductId= ActivatedRoute.snapshot.params["id"];
  }

  ngOnInit() {
    this.service.GetProductById(this.ProductId).subscribe(
      
      (data)=>{
        console.log(JSON.stringify(data));
        this.Product=data;
        this.quantity = this.Product.quantity;

      },
      (err)=>{console.log(err)}
    );
  }
  
  AddToCart(){
        this.quantity = this.Product.quantity;
        if(this.Product.amount != this.quantity){
          this.Product.amount++;
          this.orderService.AddToShoppingCart(this.Product.id,localStorage.getItem('cartToken')).subscribe();
        }
      }
    

}