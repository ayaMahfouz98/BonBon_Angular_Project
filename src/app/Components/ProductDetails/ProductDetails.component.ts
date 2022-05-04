import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/Services/products.service';
//import { serialize } from 'v8';

@Component({
  selector: 'app-ProductDetails',
  templateUrl: './ProductDetails.component.html',
  styleUrls: ['./ProductDetails.component.css']
})
export class ProductDetailsComponent implements OnInit {
ProductId:any;
Product:any;

  constructor(private ActivatedRoute:ActivatedRoute,private service:ProductsService) {
   this.ProductId= ActivatedRoute.snapshot.params["id"];
  }

  ngOnInit() {
    this.service.GetProductById( 2).subscribe(
      (data)=>{
        console.log(data);
        this.Product=data;
      },
      (err)=>{console.log(err)}
    );
  }

}
