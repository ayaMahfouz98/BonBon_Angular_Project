import { Component, OnInit , OnChanges, SimpleChanges} from '@angular/core';
import { CategoryService } from 'src/app/Services/Category.service';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-Products',
  templateUrl: './Products.component.html',
  styleUrls: ['./Products.component.css']
})
export class ProductsComponent implements OnInit{


  constructor( private productsService:ProductsService) { }
  
  AllProducts:any;


  ngOnInit() {
   this.productsService.GetProductsRecommended(6).subscribe(
     (data)=>{
               this.AllProducts=data;
              } );

            }

}
