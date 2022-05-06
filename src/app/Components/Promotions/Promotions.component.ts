import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';
//import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-Promotions',
  templateUrl: './Promotions.component.html',
  styleUrls: ['./Promotions.component.css']
})
export class PromotionsComponent implements OnInit {

  constructor(private service:ProductsService) { }
  AllProductsWithPormotion:any;
  ngOnInit() {
    this.service.GetProductWithPromotion().subscribe(
      (data)=>{
      this.AllProductsWithPormotion=data ;
      console.log("ll"+data)
    },
      (err)=>{console.log(err)});
}
image:String="https://fakeimg.pl/100/100";
customOptions: any = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: true,
  dots: true,
  navSpeed: 700,
  navText: ['', ''],
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 2
    },
    740: {
      items: 4
    },
    940: {
      items: 5
    }
  },
  nav: true
}
}
