import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-SearchProduct',
  templateUrl: './SearchProduct.component.html',
  styleUrls: ['./SearchProduct.component.css']
})
export class SearchProductComponent implements OnInit,OnChanges {
  AllProducts:any;
  ProductName:any;

 @Input() name:any;

  constructor(private activatedRoute:ActivatedRoute,private productsService:ProductsService) {
    this.ProductName= activatedRoute.snapshot.params["name"];

   }


  ngOnChanges(): void {

    this.ProductName= this.activatedRoute.snapshot.params["name"];

    this.productsService.SearchProductByName(this.ProductName).subscribe(
      (data)=>{ console.log(data)
        this.AllProducts=data ;},
      (err)=>{console.log(err)}
    );
  }

  ngOnInit() {

    this.productsService.SearchProductByName(this.ProductName).subscribe(
      (data)=>{
        this.AllProducts=data ;
        console.log(this.AllProducts)},
      (err)=>{console.log(err)}
    );

  }


}
