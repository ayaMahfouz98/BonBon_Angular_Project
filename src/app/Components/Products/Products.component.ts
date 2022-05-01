import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-Products',
  templateUrl: './Products.component.html',
  styleUrls: ['./Products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor( private productsService:ProductsService) { }
  AllProducts:any;

  ngOnInit() {
   this.productsService.GetAllProducts().subscribe(
     (data)=>{//console.log(data)
               this.AllProducts=data ;},
     (err)=>{console.log(err)}
   );
  }

}
