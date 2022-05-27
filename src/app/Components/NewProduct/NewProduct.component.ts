import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-NewProduct',
  templateUrl: './NewProduct.component.html',
  styleUrls: ['./NewProduct.component.css']
})
export class NewProductComponent implements OnInit {

  constructor( private router: Router, private service:ProductsService) { }

  ngOnInit() {
  }

  Add(Title:any,Description:any,price:any,quantity:any,categoryId:any,imageUrl:any,isPromoted:any,promotionPercentage:any,overAllRating:any){
    let product={
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
    this.service.AddNewProduct(product).subscribe();
    this.router.navigate(['/Products']);
  }


}
