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
ProductId:any = 3;
Product:any;
AllCategories:any;
selectedCatID:any;
isPromoted:any = 1;
//add categories list is it could be better
  constructor(private ActivatedRoute:ActivatedRoute,private servicePrd:ProductsService,private router: Router,private serviceCat:CategoryService) {
    this.ProductId= ActivatedRoute.snapshot.params["id"];
   // console.log(this.ProductId)
   }

   ngOnInit() {


//Adding categories for editing
this.serviceCat.GetAllCategories().subscribe(
  (data)=>{
      this.AllCategories=data;
      console.log("c"+data);

    },
  (err)=>{console.log(err)}
);

this.servicePrd.GetProductById(this.ProductId).subscribe(
      (data)=>{
        this.Product=data;
        this.selectedCatID=this.Product.categoryId;
      },
      (err)=>{console.log(err)}
    );
   }

   Edit(Title:any,Description:any,price:any,quantity:any,selectedCatID:any,imageUrl:any,isPromoted:any,promotionPercentage:any,overAllRating:any){
    let product={
      "id":this.ProductId,
      "title": Title,
      "description": Description,
      "price": price,
      "quantity": quantity,
      "categoryId": this.selectedCatID,
      "imageUrl": imageUrl,
      "isPromoted": false,
      "promotionPercentage": promotionPercentage,
      "overAllRating": overAllRating
    }
    console.log(product, this.ProductId)
    this.servicePrd.UpdateProductById(this.ProductId,product).subscribe();
    this.router.navigate(['/Products']);


  }


}
