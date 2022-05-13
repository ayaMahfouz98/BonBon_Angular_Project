import { Component, OnInit , OnChanges, SimpleChanges} from '@angular/core';
import { CategoryService } from 'src/app/Services/Category.service';
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
  selecedCategoryid:number=0;
  constructor( private productsService:ProductsService, private categoryService:CategoryService) { }
  
  AllProducts:any;
  AllCategories:any;

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

   this.categoryService.GetAllCategories().subscribe(
    (data)=>{
              this.AllCategories=data;

             }
  );

  }

  sort(): void {

   console.log(this.selecedSort);
   if(this.selecedSort==0)this.filterAllProducts();
   else if(this.selecedSort==1)this.getBestSelling();
   else if(this.selecedSort==2 || this.selecedSort==3) this.sortByAlph();
   else if(this.selecedSort==4 || this.selecedSort==5) this.sortByPrice();
  
}

private sortByAlph():void
{
  let ascd=false;
  if(this.selecedSort==2)ascd=true;
  this.productsService.SortProductsByAlpha(ascd,this.selecedCategoryid).subscribe(
  (data)=>{
            this.AllProducts=data;
            let count=0;
            for(let item of this.AllProducts)
            {
            count++;
  
             this.totalLength = count;
             }
           }
);
}

private getBestSelling():void{
  this.productsService.SortProductByBestSeller(this.selecedCategoryid).subscribe(
    (data)=>{
              this.AllProducts=data;
              let count=0;
              for(let item of this.AllProducts)
              {
              count++;
    
               this.totalLength = count;
               }
             }
  );
}

private sortByPrice():void{
  let cheap=false;
  if(this.selecedSort==4)cheap=true;
this.productsService.SortProductByPrice(cheap,this.selecedCategoryid).subscribe(
  (data)=>{
            this.AllProducts=data;
            let count=0;
            for(let item of this.AllProducts)
            {
            count++;
  
             this.totalLength = count;
             }
           }
);
}

private filterAllProducts()
{
  this.productsService.FilterProducts(this.selecedCategoryid).subscribe(
    (data)=>{
              this.AllProducts=data;
              let count=0;
              for(let item of this.AllProducts)
              {
              count++;
    
               this.totalLength = count;
               }
             }
  );
}

}
