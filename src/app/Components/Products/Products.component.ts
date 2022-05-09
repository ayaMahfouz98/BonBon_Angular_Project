import { Component, OnInit , OnChanges, SimpleChanges} from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-Products',
  templateUrl: './Products.component.html',
  styleUrls: ['./Products.component.css']
})
export class ProductsComponent implements OnInit{

  totalLength:any;
  page:number = 1;
  productsSelected:string="All Products";
  selecedSort:number=0;
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

  sort(): void {

   console.log(this.selecedSort);
   if(this.selecedSort==0)this.getAllProducts();
   else if(this.selecedSort==1)this.getBestSelling();
   else if(this.selecedSort==2 || this.selecedSort==3) this.sortByAlph();
   else if(this.selecedSort==4 || this.selecedSort==5) this.sortByPrice();
  
}

private sortByAlph():void
{
  let ascd=false;
  if(this.selecedSort==2)ascd=true;
  this.productsService.SortProductsByAlpha(ascd).subscribe(
  (data)=>{
            this.AllProducts=data;
           }
);
}

private getBestSelling():void{
  this.productsService.SortProductByBestSeller().subscribe(
    (data)=>{
              this.AllProducts=data;
             }
  );
}

private sortByPrice():void{
  let cheap=false;
  if(this.selecedSort==4)cheap=true;
this.productsService.SortProductByPrice(cheap).subscribe(
  (data)=>{
            this.AllProducts=data;
           }
);
}

private getAllProducts()
{
  this.productsService.GetAllProducts().subscribe(
    (data)=>{
              this.AllProducts=data;
             }
  );
}

}
