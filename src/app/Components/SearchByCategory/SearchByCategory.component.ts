import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-SearchByCategory',
  templateUrl: './SearchByCategory.component.html',
  styleUrls: ['./SearchByCategory.component.css']
})
export class SearchByCategoryComponent implements OnInit ,OnChanges{
  AllProducts:any;
  CategoryId:any;
  totalLength:any;
  page:number = 1;
  productsSelected:string="All Products";
 
  selecedSort:number=0;

  constructor(private activatedRoute:ActivatedRoute,private productsService:ProductsService,private router:Router) {
    this.CategoryId= activatedRoute.snapshot.params["id"];
   }

   ngOnChanges(): void {
    // this.CategoryId=
    this.activatedRoute.paramMap.subscribe(
      (paramMap)=>{
        this.CategoryId= Number(paramMap.get('id'));
        this.productsService.FilterProducts(this.CategoryId).subscribe(
          (data)=>{ console.log(data)
            this.AllProducts=data ;},
          (err)=>{console.log(err)}
        );
      }
    );

      // this.productsService.FilterProducts(this.CategoryId).subscribe(
      //   (data)=>{ console.log(data)
      //     this.AllProducts=data ;},
      //   (err)=>{console.log(err)}
      // );

      // this.router.navigate([`/SearchByCategory/${this.CategoryId}`]);
      // window.location.reload();
  }


  ngOnInit() {
    // this.productsService.FilterProducts(this.CategoryId).subscribe(
    //   (data)=>{
    //     this.AllProducts=data ;
    //     console.log(this.AllProducts)},
    //   (err)=>{console.log(err)}
    // );
    // this.router.navigate([`/Products}`]);
    // this.router.navigate([`/SearchByCategory/${this.CategoryId}`]);
   // window.location.reload();

   this.activatedRoute.paramMap.subscribe(
    (paramMap)=>{
      this.CategoryId= Number(paramMap.get('id'));
      this.productsService.FilterProducts(this.CategoryId).subscribe(
        (data)=>{ console.log(data)
          this.AllProducts=data ;
        
          let count=0;
          for(let item of this.AllProducts)
          {
          count++;

           this.totalLength = count;
           }
        },
        (err)=>{console.log(err)}
      );
    }
  );

  }


  //doesn't work yet we have to implement in backend 3 more functoins that filter with sort
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
   this.activatedRoute.paramMap.subscribe(
    (paramMap)=>{
      this.CategoryId= Number(paramMap.get('id'));
      this.productsService.FilterProducts(this.CategoryId).subscribe(
        (data)=>{ console.log(data)
          this.AllProducts=data ;

      
        
          
        },
        (err)=>{console.log(err)}
      );
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
