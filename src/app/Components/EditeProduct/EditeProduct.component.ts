import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/Services/products.service';
import { Router } from "@angular/router";
import { CategoryService } from 'src/app/Services/Category.service';

@Component({
  selector: 'app-EditeProduct',
  templateUrl: './EditeProduct.component.html',
  styleUrls: ['./EditeProduct.component.css']
})
export class EditeProductComponent implements OnInit {
ProductId:any;
Product:any;
AllCategories:any;

//add categories list is it could be better
  constructor(private ActivatedRoute:ActivatedRoute,private servicePrd:ProductsService,private router: Router,private serviceCat:CategoryService) {
    this.ProductId= ActivatedRoute.snapshot.params["id"];
   }
   
   ngOnInit() {
     this.servicePrd.GetProductById(this.ProductId).subscribe(
       (data)=>{
         console.log(data);
         this.Product=data;
       },
       (err)=>{console.log(err)}
     );

//Adding categories for editing
     this.serviceCat.GetAllCategories().subscribe(
       
      (data)=>{
          this.AllCategories=data;
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
    this.servicePrd.UpdateProductById(this.ProductId,product).subscribe();
    this.router.navigate(['/Products']);

  }


}
