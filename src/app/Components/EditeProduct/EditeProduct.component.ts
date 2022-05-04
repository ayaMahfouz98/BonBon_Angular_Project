import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/Services/products.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-EditeProduct',
  templateUrl: './EditeProduct.component.html',
  styleUrls: ['./EditeProduct.component.css']
})
export class EditeProductComponent implements OnInit {
ProductId:any;
Product:any;

  constructor(private ActivatedRoute:ActivatedRoute,private service:ProductsService,private router: Router) {
    this.ProductId= ActivatedRoute.snapshot.params["id"];
   }

   ngOnInit() {
     this.service.GetProductById(this.ProductId).subscribe(
       (data)=>{
         console.log(data);
         this.Product=data;
       },
       (err)=>{console.log(err)}
     );
   }

   Edit(Title:any,Description:any,price:any,quantity:any,categoryId:any,imageUrl:any,isPromoted:any,promotionPercentage:any,overAllRating:any){
    let product={
      "id":this.ProductId,
      "title": Title,
      "description": Description,
      "price": price,
      "quantity": quantity,
      "categoryId": categoryId,
      "imageUrl": imageUrl,
      "isPromoted": isPromoted,
      "promotionPercentage": promotionPercentage,
      "overAllRating": overAllRating
    }
    this.service.UpdateProductById(this.ProductId,product).subscribe();
    this.router.navigate(['/Products']);

  }


}
