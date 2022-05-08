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
          this.AllProducts=data ;},
        (err)=>{console.log(err)}
      );
    }
  );

  }
}
