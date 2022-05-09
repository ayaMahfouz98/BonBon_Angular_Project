import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-Products',
  templateUrl: './Products.component.html',
  styleUrls: ['./Products.component.css']
})
export class ProductsComponent implements OnInit {

  totalLength:any;
  page:number = 1;
  constructor( private productsService:ProductsService) { }
  AllProducts:any;

  ngOnInit() {
   this.productsService.GetAllProducts().subscribe(
     (data)=>{
               this.AllProducts=data;
              /*not the best solution we have to return observible of type
              {product but we didn`t create models :) }
              */
             let count=0;
             for(let item of this.AllProducts)
             count++;

              this.totalLength = count;
              }
   );
  }

}
