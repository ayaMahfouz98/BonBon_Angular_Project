import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-best-seller',
  templateUrl: './best-seller.component.html',
  styleUrls: ['./best-seller.component.css']
})
export class BestSellerComponent implements OnInit {

  constructor( private productsService:ProductsService) { }
  
  AllProducts:any;


  ngOnInit() {
   this.productsService.GetProductsRecommended(6).subscribe(
     (data)=>{
               this.AllProducts=data;
              } );

            }


}
