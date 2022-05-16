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
IsPromoted:any ;
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

        if(this.Product.isPromoted==0){
          this.IsPromoted=0;
        }else{
          this.IsPromoted=1;
        }
      },
      (err)=>{console.log(err)}
    );
   }

   Edit(Title:any,Description:any,price:any,quantity:any,selectedCatID:any,imageUrl:any,isPromoted:boolean,promotionPercentage:any,overAllRating:any){
    let product={
      "id":this.ProductId,
      "title": Title,
      "description": Description,
      "price": price,
      "quantity": quantity,
      "categoryId": this.selectedCatID,
      "imageUrl": imageUrl,
      "isPromoted": isPromoted,
      "promotionPercentage": promotionPercentage,
      "overAllRating": overAllRating
    }
    console.log(product, this.ProductId)
    this.servicePrd.UpdateProductById(this.ProductId,product).subscribe();
    this.router.navigate(['/Products']);
  }


}
