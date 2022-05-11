import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/Services/products.service';
import { BrowserModule } from '@angular/platform-browser'

@Component({
  selector: 'app-SearchProduct',
  templateUrl: './SearchProduct.component.html',
  styleUrls: ['./SearchProduct.component.css']
})
export class SearchProductComponent implements OnInit,OnChanges {
  AllProducts:any;
  ProductName:any;
  totalLength:number=0;
  page:number = 1;

 @Input() name:any;

  constructor(private activatedRoute:ActivatedRoute,private productsService:ProductsService,private router: Router) {
    this.ProductName= activatedRoute.snapshot.params["name"];

   }


  ngOnChanges(): void {

    this.ProductName= this.activatedRoute.snapshot.params["name"];

    if(this.ProductName==""){
      this.router.navigate(['/Products']);
    }else{
      this.productsService.SearchProductByName(this.ProductName).subscribe(
        (data)=>{ console.log(data)
          this.AllProducts=data ;},
        (err)=>{console.log(err)}
      );

    }


  }

  ngOnInit() {

    // this.productsService.SearchProductByName(this.ProductName).subscribe(
    //   (data)=>{
    //     this.AllProducts=data ;
    //     console.log(this.AllProducts)},
    //   (err)=>{console.log(err)}
    // );

    this.activatedRoute.paramMap.subscribe(
      (paramMap)=>{
        this.ProductName= String(paramMap.get('name'));
        this.productsService.SearchProductByName(this.ProductName).subscribe(
          (data)=>{ console.log(data)
            this.AllProducts=data ;
          
            let count=0;
            for(let item of this.AllProducts)
            count++;

             this.totalLength = count;},
          (err)=>{console.log(err)}
        );

        
      }
    );


  }
  
  

}
