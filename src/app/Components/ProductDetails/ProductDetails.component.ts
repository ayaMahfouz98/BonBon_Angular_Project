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

  constructor(private ActivatedRoute:ActivatedRoute,private service:ProductsService,private orderService :OrderService) {
   this.ProductId= ActivatedRoute.snapshot.params["id"];
  }

  ngOnInit() {
    this.service.GetProductById(this.ProductId).subscribe(
      (data)=>{
        console.log(JSON.stringify(data));
        this.Product=data;
      },
      (err)=>{console.log(err)}
    );
  }
  
  AddToCart(){
    this.orderService.AddToShoppingCart(this.ProductId).subscribe(
      (data)=>{
        console.log(data+"v");
      },
      (err)=>{console.log(err)}
    );
  }
}